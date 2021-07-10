/*
  For Building Simple & small without data.
  example: like button, no internet, not found
*/
import API_ENDPOINT from '../../global/api-endpoint';

const createDetailTemplate = (restaurant) => `
<div class="detail__large">
  <h2 class="detail__title">${restaurant.name}</h2>
  <div class="detail-meta__wrapper">
    <image class="detail__image" src="${API_ENDPOINT.IMAGE_L(restaurant.pictureId)}">
    <div class="meta-info">
      <detail-info label="city" value="${restaurant.city}" icon="far fa-building"></detail-info>
      <detail-info label="alamat" value="${restaurant.address}" icon="far fa-map-marker-alt"></detail-info>
      <detail-info label="kategori" value="${restaurant.categories.map((c) => c.name).join(', ')}" icon="far fa-bookmark"></detail-info>
      <detail-info label="rating" value="${restaurant.rating}" icon="far fa-bullseye-arrow"></detail-info>
    </div>
  </div>
  <h3 class="label detail__description-label">Description</h3>
  <p class="description detail__description-value">
  ${restaurant.description}
  </p>
  <div class="dish__menus">
    <h3 class="detail__dish">${restaurant.name} Menus</h3>
    <div class="thin-wrapper"></div>
    <div class="button-wrapper">
      <button class="btn-dish active" id="menu-dish">Foods</button>
      <button class="btn-dish" id="menu-drink">Drink</button>
    </div>
  </div>
</div>


`;

const createLikeButtonTemplate = () => `
  <button aria-label="like restaurant" id="likeButton" class="like-button">
    <i class="far fa-heart" id="lk-button"></i>
  </button
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike restaurant" id="likeButton" class="like-button">
    <i class="fas fa-heart" id="lk-button"></i>
  </button>
`;

const createNoInternetTemplate = () => `
  <div class="error-wrapper">
  <h2>Something Went Wrong!</h2>
  <p>We can't connect to our database, please check your connection and pull refresh or try again later.</p>
  </div>
  <div id="no-internet-connection"></div>
`;

const createNotFoundTemplate = () => `
  <div class="not-found">
    <div id="not-found-lottie"></div>
    <h2>Oops... Not found!</h2>
    <p>We cannot found your request in our database</p>
  </div>
`;

const createSmallNoInternetTemplate = () => `
  <div class="not-found">
    <div id="no-connection-lottie"></div>
    <h2>Oops... No Connection!</h2>
    <p>We cannot to our database, please check your connection and pull refresh or try again later</p>
  </div>
`;

const createNoFavorites = () => `
  <div class="not-found" style="margin-top: 13rem !important">
    <h2>You have no favorite restaurant yet!</h2>
    <p>Choose your favorite restaurant from catalogue list!</p>
  </div>
`

export {
  createDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createNoInternetTemplate,
  createNotFoundTemplate,
  createSmallNoInternetTemplate,
  createNoFavorites
};
