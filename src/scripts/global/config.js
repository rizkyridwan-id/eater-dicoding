const CONFIG = {
  KEY: '12345',
  CONTENT_TYPE: 'application/json',
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  BASE_IMAGE_URL() { return `${this.BASE_URL}images/small/`; },
  BASE_IMAGE_URL_M() { return `${this.BASE_URL}images/medium/`; },
  BASE_IMAGE_URL_L() { return `${this.BASE_URL}images/large/`; },
  CACHE_NAME: new Date().toISOString(),
  DATABASE_NAME: 'eater-restaurant-db',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'favorites-restaurants',
};

export default CONFIG;
