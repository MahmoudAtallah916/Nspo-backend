import Visit from '../models/Visit.js';
import { connectDB } from '../config/database.js';


const pad2 = (n) => String(n).padStart(2, '0');

const getLocalDateString = (d = new Date()) => {
  const year = d.getFullYear();
  const month = pad2(d.getMonth() + 1);
  const day = pad2(d.getDate());
  return `${year}-${month}-${day}`;
};

const getDatesForRange = (range) => {
  const normalized = String(range || 'today').toLowerCase();
  const today = new Date();

  if (
    normalized === 'last7days' ||
    normalized === 'last_7_days' ||
    normalized === '7days' ||
    normalized === 'last7'
  ) {
    const dates = [];
    for (let i = 6; i >= 0; i -= 1) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      dates.push(getLocalDateString(d));
    }
    return dates;
  }

  // Default: today
  return [getLocalDateString(today)];
};

const aggregateVisits = (docs) => {
  let totalVisits = 0;
  let uniqueVisitors = 0;
  const endpointCounts = new Map(); // `${method} ${path}` => count

  for (const doc of docs) {
    totalVisits += doc.totalVisits || 0;
    uniqueVisitors += doc.uniqueVisitors || 0;

    for (const ep of doc.endpoints || []) {
      const method = ep.method || 'GET';
      const path = ep.path || '/';
      const key = `${method} ${path}`;
      const current = endpointCounts.get(key) || 0;
      endpointCounts.set(key, current + (ep.count || 0));
    }
  }

  let mostUsedEndpoint = { path: '', method: '', count: 0 };
  for (const [key, count] of endpointCounts.entries()) {
    const [method, ...pathParts] = key.split(' ');
    const path = pathParts.join(' ');
    if (count > mostUsedEndpoint.count) {
      mostUsedEndpoint = { method, path, count };
    }
  }

  const endpoints = Array.from(endpointCounts.entries()).map(([key, count]) => {
    const [method, ...pathParts] = key.split(' ');
    return { method, path: pathParts.join(' '), count };
  });
  endpoints.sort((a, b) => b.count - a.count);

  return {
    totalVisits,
    uniqueVisitors,
    mostUsedEndpoint,
    endpoints,
  };
};

export const getAnalyticsSummary = async (req, res) => {
  try {
    await connectDB();

    const dates = getDatesForRange(req.query.range);
    const docs = await Visit.find({ date: { $in: dates } }).lean();
    const { totalVisits, uniqueVisitors, mostUsedEndpoint } = aggregateVisits(docs);

    return res.status(200).json({
      totalVisits,
      uniqueVisitors,
      mostUsedEndpoint,
    });
  } catch (err) {
    console.error('getAnalyticsSummary error:', err);
    return res.status(500).json({
      error: 'Failed to load analytics summary',
      details: err.message,
    });
  }
};

export const getAnalyticsEndpoints = async (req, res) => {
  try {
    await connectDB();

    const dates = getDatesForRange(req.query.range);
    const docs = await Visit.find({ date: { $in: dates } }).lean();
    const { endpoints } = aggregateVisits(docs);

    // Spec: return all endpoints with counts.
    return res.status(200).json(endpoints);
  } catch (err) {
    console.error('getAnalyticsEndpoints error:', err);
    return res.status(500).json({
      error: 'Failed to load analytics endpoints',
      details: err.message,
    });
  }
};

