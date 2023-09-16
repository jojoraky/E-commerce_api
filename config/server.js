
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: env('PUBLIC_URL', 'https://jhj-t2lu.onrender.com'),
  proxy: env.bool('IS_PROXIED', true),
  cron: {
    enabled: env.bool('CRON_ENABLED', false),
  },
});
