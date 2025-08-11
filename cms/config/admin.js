'use strict';

module.exports = (({ env }) => ({ 
  auth: { 
    secret: env('ADMIN_JWT_SECRET', '384588e9a5cec249b051853a31702bf892aca83199cf358d'),
  },
}));
