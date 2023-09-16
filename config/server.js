module.exports = ({ env }) => ({
  host: env('HOST', '127.0.0.1'),
  url: env('PUBLIC_URL', 'https://testingaa.onrender.com'),
  proxy: env.bool('IS_PROXIED', true),
    port: env.int('PORT', 80),
    app: {
      keys: env.array('APP_KEYS'),
    },
    webhooks: {
      populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },
  });
