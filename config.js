/* =========================================================
   BAARI SPORTS CENTER ADMIN — config.js
   Trimmed copy of the storefront's config.js, containing only
   what the admin dashboard actually uses: the Supabase
   connection and store constants (used for currency formatting
   and WhatsApp message templates in admin.js).

   Kept as a separate file/repo from the storefront's config.js
   by design — the admin now lives in its own deployment
   (admin.baarisportscentre.co.ke), so this can't be shared or
   imported across origins. Both copies must point at the same
   Supabase project; update both if credentials ever rotate.
   ========================================================= */

const BAARI_CONFIG = Object.freeze({

  // ---------------------------------------------------------
  // SUPABASE — same project as the storefront. The anon key
  // below is a public, RLS-scoped key — safe to expose. Admin
  // actions are gated by real Supabase Auth (see admin.js),
  // not by this key.
  // ---------------------------------------------------------
  SUPABASE: Object.freeze({
    URL: 'https://ccnjlyytxbhqhwybobei.supabase.co',
    ANON_KEY: 'sb_publishable_e3Zx40VklZr4uL0hP3CT4g_8uU0TE6m',
    TABLES: Object.freeze({
      PRODUCTS: 'products',
      CATEGORIES: 'categories',
      ORDERS: 'orders',
      KIT_REQUESTS: 'kit_requests',
    }),
    STORAGE_BUCKET: 'product-images',
  }),

  // ---------------------------------------------------------
  // STORE CONSTANTS — used for currency formatting and the
  // WhatsApp order-update / kit-quote message templates.
  // ---------------------------------------------------------
  STORE: Object.freeze({
    NAME: 'Baari Sports Center',
    LOCATION: 'Kimana Town, Oloitokitok Sub-County, Kajiado County',
    WHATSAPP_NUMBER: '254702453813', // digits only, no + prefix
    SUPPORT_EMAIL: 'BaariSportscentre01@gmail.com',
    CURRENCY: 'KES',
    CURRENCY_LOCALE: 'en-KE',
  }),
});

if (typeof window !== 'undefined') {
  window.BAARI_CONFIG = BAARI_CONFIG;
}
