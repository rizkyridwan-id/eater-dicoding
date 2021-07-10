import CONFIG from './config';

const API_ENDPOINT = {
  HOME: `${CONFIG.BASE_URL}list`,
  ADD_REVIEW: `${CONFIG.BASE_URL}review`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  SEARCH: (query) => `${CONFIG.BASE_URL}search?q=${query}`,
  IMAGE: (id) => `${CONFIG.BASE_IMAGE_URL()}${id}`,
  IMAGE_M: (id) => `${CONFIG.BASE_IMAGE_URL_M()}${id}`,
  IMAGE_L: (id) => `${CONFIG.BASE_IMAGE_URL_L()}${id}`,
};

export default API_ENDPOINT;
