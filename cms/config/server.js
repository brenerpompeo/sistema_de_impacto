'use strict';

module.exports = (({ env }) => ({ 
  url: env('PUBLIC_URL', ''),
  host: '0.0.0.0',
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['ac082c146298eba3c19852b28576763a','2589cce46986467124896b9b913a6adf'])
  },
}));
