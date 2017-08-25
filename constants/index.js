const ENV = {
  DEV: 'development',
  PROD: 'production',
  TEST: 'test',
}

const URLS = {
  ROOT: '/',
  SIGN_IN: '/signin',
  SIGN_UP: '/signup',
  SIGN_OUT: '/signout',
  FORGOT: '/forgot',
}

module.exports = {
  ENV,
  URLS,
  PORT: 3000,
  TEST_PORT: 8081,
}
