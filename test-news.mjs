/**
 * News API Smoke Test
 * Run: node test-news.mjs
 */

const BASE = 'http://localhost:3000/api/news';

const colors = {
  green:  (s) => `\x1b[32m${s}\x1b[0m`,
  red:    (s) => `\x1b[31m${s}\x1b[0m`,
  cyan:   (s) => `\x1b[36m${s}\x1b[0m`,
  yellow: (s) => `\x1b[33m${s}\x1b[0m`,
};

let passed = 0;
let failed = 0;

async function req(method, url, body) {
  const opts = { method, headers: { 'Content-Type': 'application/json' } };
  if (body) opts.body = JSON.stringify(body);
  const res = await fetch(url, opts);
  const data = await res.json();
  return { status: res.status, data };
}

function assert(label, condition, detail = '') {
  if (condition) {
    console.log(colors.green(`  ✔ ${label}`));
    passed++;
  } else {
    console.log(colors.red(`  ✘ ${label}`) + (detail ? `  → ${detail}` : ''));
    failed++;
  }
}

async function run() {
  console.log(colors.cyan('\n════════════════════════════════════════'));
  console.log(colors.cyan('  News CMS API — Full Smoke Test Suite'));
  console.log(colors.cyan('════════════════════════════════════════\n'));

  // ── 1. GET /api/news (empty) ────────────────────────────────────────────────
  console.log(colors.yellow('1. GET /api/news (list)'));
  const list0 = await req('GET', BASE);
  assert('Status 200',           list0.status === 200);
  assert('success: true',        list0.data.success === true);
  assert('data is array',        Array.isArray(list0.data.data));
  assert('pagination present',   list0.data.pagination != null);

  // ── 2. POST /api/news (create first) ──────────────────────────────────────
  console.log(colors.yellow('\n2. POST /api/news — create announcement'));
  const c1 = await req('POST', BASE, {
    title:      'اختبار نظام الأخبار الحكومي',
    summary:    'ملخص قصير للاختبار',
    content:    '<p>محتوى الخبر كامل هنا</p>',
    category:   'announcements',
    isFeatured: true,
  });
  assert('Status 201',              c1.status === 201);
  assert('success: true',           c1.data.success === true);
  assert('title matches',           c1.data.data?.title === 'اختبار نظام الأخبار الحكومي');
  assert('slug auto-generated',     typeof c1.data.data?.slug === 'string' && c1.data.data.slug.length > 0);
  assert('category = announcements',c1.data.data?.category === 'announcements');
  assert('isFeatured = true',       c1.data.data?.isFeatured === true);

  const id1   = c1.data.data?._id;
  const slug1 = c1.data.data?.slug;

  // ── 3. POST second item (projects) ──────────────────────────────────────────
  console.log(colors.yellow('\n3. POST /api/news — create project'));
  const c2 = await req('POST', BASE, {
    title:    'مشروع تطوير البنية التحتية الوطنية',
    category: 'projects',
  });
  assert('Status 201',          c2.status === 201);
  assert('category = projects', c2.data.data?.category === 'projects');
  const id2 = c2.data.data?._id;

  // ── 4. Duplicate title → unique slug ─────────────────────────────────────
  console.log(colors.yellow('\n4. POST duplicate title — unique slug'));
  const c3 = await req('POST', BASE, {
    title:    'اختبار نظام الأخبار الحكومي',
    category: 'news',
  });
  assert('Status 201',           c3.status === 201);
  assert('Slug differs from c1', c3.data.data?.slug !== slug1);
  const id3 = c3.data.data?._id;

  // ── 5. GET list with pagination ──────────────────────────────────────────
  console.log(colors.yellow('\n5. GET /api/news?page=1&limit=2'));
  const page = await req('GET', `${BASE}?page=1&limit=2`);
  assert('Status 200',              page.status === 200);
  assert('Max 2 items returned',    page.data.data.length <= 2);
  assert('total = 3',               page.data.pagination.total === 3);
  assert('pages calculated',        page.data.pagination.pages >= 2);

  // ── 6. GET filtered by category ─────────────────────────────────────────
  console.log(colors.yellow('\n6. GET /api/news?category=projects'));
  const byCategory = await req('GET', `${BASE}?category=projects`);
  assert('Status 200',              byCategory.status === 200);
  assert('Only projects',           byCategory.data.data.every(n => n.category === 'projects'));

  // ── 7. GET search ────────────────────────────────────────────────────────
  console.log(colors.yellow('\n7. GET /api/news?search=اختبار'));
  const search = await req('GET', `${BASE}?search=${encodeURIComponent('اختبار')}`);
  assert('Status 200',              search.status === 200);
  assert('Results include keyword', search.data.data.length >= 1);

  // ── 8. GET featured ──────────────────────────────────────────────────────
  console.log(colors.yellow('\n8. GET /api/news/featured'));
  const featured = await req('GET', `${BASE}/featured`);
  assert('Status 200',      featured.status === 200);
  assert('All featured',    featured.data.data.every(n => n.isFeatured === true));
  assert('Has 1 item',      featured.data.data.length >= 1);

  // ── 9. GET by slug ───────────────────────────────────────────────────────
  console.log(colors.yellow(`\n9. GET /api/news/${slug1}`));
  const single = await req('GET', `${BASE}/${slug1}`);
  assert('Status 200',      single.status === 200);
  assert('ID matches',      single.data.data?._id === id1);
  assert('content present', 'content' in (single.data.data ?? {}));

  // ── 10. GET invalid slug → 404 ───────────────────────────────────────────
  console.log(colors.yellow('\n10. GET /api/news/slug-does-not-exist → 404'));
  const notFound = await req('GET', `${BASE}/slug-does-not-exist`);
  assert('Status 404',      notFound.status === 404);
  assert('success: false',  notFound.data.success === false);

  // ── 11. GET related ──────────────────────────────────────────────────────
  console.log(colors.yellow('\n11. GET /api/news/related/announcements'));
  const related = await req('GET', `${BASE}/related/announcements`);
  assert('Status 200',              related.status === 200);
  assert('All same category',       related.data.data.every(n => n.category === 'announcements'));

  // ── 12. GET related invalid category → 400 ───────────────────────────────
  console.log(colors.yellow('\n12. GET /api/news/related/invalid → 400'));
  const badCat = await req('GET', `${BASE}/related/invalid`);
  assert('Status 400',      badCat.status === 400);

  // ── 13. PUT update ───────────────────────────────────────────────────────
  console.log(colors.yellow(`\n13. PUT /api/news/${id1}`));
  const updated = await req('PUT', `${BASE}/${id1}`, {
    summary:    'ملخص محدّث بعد التعديل',
    isFeatured: false,
  });
  assert('Status 200',          updated.status === 200);
  assert('summary updated',     updated.data.data?.summary === 'ملخص محدّث بعد التعديل');
  assert('isFeatured = false',  updated.data.data?.isFeatured === false);
  assert('slug unchanged',      updated.data.data?.slug === slug1);

  // ── 14. PUT with new title → slug regenerated ────────────────────────────
  console.log(colors.yellow(`\n14. PUT /api/news/${id1} — new title → new slug`));
  const reslug = await req('PUT', `${BASE}/${id1}`, {
    title: 'عنوان جديد تماماً للاختبار',
  });
  assert('Status 200',        reslug.status === 200);
  assert('Slug changed',      reslug.data.data?.slug !== slug1);
  assert('Title updated',     reslug.data.data?.title === 'عنوان جديد تماماً للاختبار');

  // ── 15. PUT invalid id → 404 ─────────────────────────────────────────────
  console.log(colors.yellow('\n15. PUT /api/news/000000000000000000000000 → 404'));
  const putNotFound = await req('PUT', `${BASE}/000000000000000000000000`, { summary: 'x' });
  assert('Status 404',      putNotFound.status === 404);

  // ── 16. DELETE ───────────────────────────────────────────────────────────
  console.log(colors.yellow(`\n16. DELETE /api/news/${id1}`));
  const del1 = await req('DELETE', `${BASE}/${id1}`);
  assert('Status 200',      del1.status === 200);
  assert('success: true',   del1.data.success === true);

  console.log(colors.yellow(`\n17. DELETE /api/news/${id2}`));
  await req('DELETE', `${BASE}/${id2}`);

  console.log(colors.yellow(`\n18. DELETE /api/news/${id3}`));
  await req('DELETE', `${BASE}/${id3}`);

  // ── 17. DELETE invalid → 404 ─────────────────────────────────────────────
  console.log(colors.yellow('\n19. DELETE /api/news/000000000000000000000000 → 404'));
  const delNotFound = await req('DELETE', `${BASE}/000000000000000000000000`);
  assert('Status 404',      delNotFound.status === 404);

  // ── 18. Verify empty after cleanup ───────────────────────────────────────
  console.log(colors.yellow('\n20. GET /api/news (should be empty again)'));
  const final = await req('GET', BASE);
  assert('Status 200',    final.status === 200);
  assert('total = 0',     final.data.pagination.total === 0);

  // ── Summary ──────────────────────────────────────────────────────────────
  console.log(colors.cyan('\n════════════════════════════════════════'));
  const total = passed + failed;
  if (failed === 0) {
    console.log(colors.green(`  ✅ All ${total} assertions passed!`));
  } else {
    console.log(colors.red(`  ❌ ${failed}/${total} assertions failed`));
    process.exit(1);
  }
  console.log(colors.cyan('════════════════════════════════════════\n'));
}

run().catch((err) => {
  console.error(colors.red('\nFATAL: ' + err.message));
  process.exit(1);
});
