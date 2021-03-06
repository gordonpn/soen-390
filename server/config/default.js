// eslint-disable-next-line
require('dotenv').config({ path: './.env' });

// place all config related things here and inject it anywhere in app
module.exports = {
  server: {
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 9090,
    authEnabled: process.env.AUTH_ENABLED || true,
  },
  env: process.env.NODE_ENV || 'development',
  zeetEnv: process.env.ZEET_ENVIRONMENT || 'local',
  mongo: {
    port: process.env.MONGO_PORT || 27017,
    host: process.env.MONGO_HOST || 'mongo',
    user: process.env.MONGO_USER || 'root',
    pass: process.env.MONGO_PASS || 'example',
    db: process.env.MONGO_DB_NAME || 'app_db',
    dbStaging: process.env.MONGO_DB_NAME_STAGING || 'app_db',
  },
  salt: process.env.SALT || 10,
  jwt: {
    secret: process.env.JWT_SECRET || 'addadasjfghKEU10dawadrfgh!e29sosafelol',
    expiry: process.env.JWT_EXPIRY || '7d',
  },
  email: {
    user: 'soen390.team07@gmail.com',
    pass: process.env.EMAIL_PASS || '',
  },
  logdna: {
    key: process.env.LOGDNA || '',
    app: `${process.env.ZEET_ENVIRONMENT} backend service`,
    env: process.env.ZEET_ENVIRONMENT || 'local',
    handleExceptions: true,
    level: 'info',
  },
  aws: {
    secret: process.env.AWS_SECRET_ACCESS_KEY || 'test',
    access: process.env.AWS_ACCESS_KEY_ID || 'test',
    bucket: process.env.AWS_BUCKET || 'soen-390-dev',
    region: process.env.AWS_DEFAULT_REGION || 'us-east-1',
    localEndpoint: 'http://aws-localstack:4566',
  },
};
