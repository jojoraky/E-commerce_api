module.exports = ({ env }) => ({
host: env('HOST', '0.0.0.0'),
url: env('PUBLIC_URL', 'https://jhj-t2lu.onrender.com'),
proxy: env.bool('IS_PROXIED', true),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
