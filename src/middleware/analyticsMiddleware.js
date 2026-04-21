import Visit from '../models/Visit.js';

const pad2 = (n) => String(n).padStart(2, '0');

const getLocalDateString = (d = new Date()) => {
  const year = d.getFullYear();
  const month = pad2(d.getMonth() + 1);
  const day = pad2(d.getDate());
  return `${year}-${month}-${day}`;
};

const getCookieValue = (req, cookieName) => {
  const header = req.headers?.cookie;
  if (!header) return undefined;

  // Tiny cookie parser; avoids adding `cookie-parser`.
  const parts = header.split(';');
  for (const part of parts) {
    const [rawName, ...rest] = part.trim().split('=');
    if (!rawName) continue;
    if (rawName === cookieName) {
      return decodeURIComponent(rest.join('='));
    }
  }
  return undefined;
};

const getEndOfDayMaxAgeMs = () => {
  const now = new Date();
  const end = new Date(now);
  end.setHours(23, 59, 59, 999);
  const ms = end.getTime() - now.getTime();
  return Math.max(ms, 0);
};

export const trackAnalytics = async (req, res, next) => {
  try {
    const today = getLocalDateString();
    const method = (req.method || 'GET').toUpperCase();
    const endpointPath = req.originalUrl || req.path || '/';

    const cookieVisited = getCookieValue(req, 'visited');
    const isUnique = !cookieVisited || cookieVisited !== today;

    if (isUnique) {
      // Requirement: missing `visited` => unique and set cookie.
      // We also refresh it daily (cookie stores today's date).
      res.cookie('visited', today, {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        maxAge: getEndOfDayMaxAgeMs(),
      });
    }

    await Visit.updateOne(
      { date: today },
      [
        {
          $set: {
            date: today,
            totalVisits: { $add: [{ $ifNull: ['$totalVisits', 0] }, 1] },
            uniqueVisitors: {
              $add: [{ $ifNull: ['$uniqueVisitors', 0] }, isUnique ? 1 : 0],
            },
            endpoints: {
              $let: {
                vars: {
                  existing: { $ifNull: ['$endpoints', []] },
                  matches: {
                    $filter: {
                      input: { $ifNull: ['$endpoints', []] },
                      as: 'e',
                      cond: {
                        $and: [
                          { $eq: ['$$e.path', endpointPath] },
                          { $eq: ['$$e.method', method] },
                        ],
                      },
                    },
                  },
                },
                in: {
                  $cond: [
                    { $gt: [{ $size: '$$matches' }, 0] },
                    {
                      $map: {
                        input: '$$existing',
                        as: 'e',
                        in: {
                          $cond: [
                            {
                              $and: [
                                { $eq: ['$$e.path', endpointPath] },
                                { $eq: ['$$e.method', method] },
                              ],
                            },
                            {
                              $mergeObjects: [
                                '$$e',
                                {
                                  count: { $add: [{ $ifNull: ['$$e.count', 0] }, 1] },
                                },
                              ],
                            },
                            '$$e',
                          ],
                        },
                      },
                    },
                    { $concatArrays: ['$$existing', [{ path: endpointPath, method, count: 1 }]] },
                  ],
                },
              },
            },
          },
        },
      ],
      { upsert: true }
    );
  } catch (err) {
    // Analytics should never break the main API response.
    console.error('Analytics middleware error:', err);
  } finally {
    next();
  }
};

