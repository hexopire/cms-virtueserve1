module.exports = ({ env }) => [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "default-src": ["'self'"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            env("SUPABASE_URL"),
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            env("SUPABASE_URL"),
          ],
        },
      },
    },
  },

  {
  name: "strapi::cors",
  config: {
    enabled: true,
    origin: [
      "http://localhost:3000",           // local frontend
      "https://virtue-s.vercel.app",
      "https://cms-virtueserve1.onrender.com",     // ✅ deployed frontend (no trailing slash)
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    headers: "*",
    keepHeaderOnError: true,
  },
},


  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
