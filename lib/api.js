const WP_API = "http://localhost/school-backend/index.php/wp-json/wp/v2";

async function wpFetch(endpoint) {
  try {
    const res = await fetch(`${WP_API}${endpoint}`, { cache: "no-store" });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function getPosts() {
  return wpFetch("/posts?_embed&per_page=100") ?? [];
}

export async function getPostBySlug(slug) {
  const posts = await wpFetch(`/posts?slug=${slug}&_embed`);
  return posts?.[0] ?? null;
}

export async function getPages() {
  return wpFetch("/pages?_embed") ?? [];
}

export async function getPageBySlug(slug) {
  const pages = await wpFetch(`/pages?slug=${slug}&_embed`);
  return pages?.[0] ?? null;
}

export async function getEvents() {
  // Uses a custom post type "event" — create it in WordPress with CPT UI plugin
  // Falls back to regular posts in "events" category if CPT not set up
  const events = await wpFetch("/posts?categories_slug=events&_embed&per_page=50");
  return events ?? [];
}

export async function getGallery() {
  // Fetches all images uploaded to WordPress media library
  return wpFetch("/media?media_type=image&per_page=50") ?? [];
}

export async function getNotices() {
  const cat = await wpFetch("/categories?slug=notices");
  const id = Array.isArray(cat) && cat[0] ? cat[0].id : null;
  return id ? (wpFetch(`/posts?categories=${id}&per_page=10`) ?? []) : [];
}

export async function getBannerSlides() {
  const cat = await wpFetch("/categories?slug=banner-slides");
  const id = Array.isArray(cat) && cat[0] ? cat[0].id : null;
  return id ? (wpFetch(`/posts?categories=${id}&_embed&per_page=10`) ?? []) : [];
}

export async function getWhyUs() {
  const cat = await wpFetch("/categories?slug=why-us");
  const id = Array.isArray(cat) && cat[0] ? cat[0].id : null;
  return id ? (wpFetch(`/posts?categories=${id}&_embed&per_page=10`) ?? []) : [];
}

export async function getStats() {
  const cat = await wpFetch("/categories?slug=stats");
  const id = Array.isArray(cat) && cat[0] ? cat[0].id : null;
  return id ? (wpFetch(`/posts?categories=${id}&per_page=10`) ?? []) : [];
}

export async function getTeachers() {
  const cat = await wpFetch("/categories?slug=teachers");
  const id = Array.isArray(cat) && cat[0] ? cat[0].id : null;
  return id ? (wpFetch(`/posts?categories=${id}&_embed&per_page=20`) ?? []) : [];
}

export async function getTestimonials() {
  const cat = await wpFetch("/categories?slug=testimonials");
  const id = Array.isArray(cat) && cat[0] ? cat[0].id : null;
  return id ? (wpFetch(`/posts?categories=${id}&_embed&per_page=10`) ?? []) : [];
}

export async function getHomeGallery() {
  const cat = await wpFetch("/categories?slug=gallery-preview");
  const id = Array.isArray(cat) && cat[0] ? cat[0].id : null;
  return id ? (wpFetch(`/posts?categories=${id}&_embed&per_page=8`) ?? []) : [];
}

export async function getHomeEvents() {
  const cat = await wpFetch("/categories?slug=home-events");
  const id = Array.isArray(cat) && cat[0] ? cat[0].id : null;
  return id ? (wpFetch(`/posts?categories=${id}&_embed&per_page=6`) ?? []) : [];
}

export async function getFacilities() {
  const cat = await wpFetch("/categories?slug=facilities");
  const id = Array.isArray(cat) && cat[0] ? cat[0].id : null;
  return id ? (wpFetch(`/posts?categories=${id}&_embed&per_page=20`) ?? []) : [];
}
