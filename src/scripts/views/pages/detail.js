import { createDetailTemplate } from '../templates/template-creator';
import EaterSource from '../../data/eater-source';
import UrlParser from '../../routes/url-parser';
import ErrorHandler from '../../utils/error-handler';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import '../../components/menu-list';
import '../../components/customer-reviews';
import '../../components/review-form';
import EaterIdb from '../../data/eater-idb';

const Detail = {
  async render() {
    return `
      <div class="bg-back"></div>
      <section id="detail-sect">
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const rootElement = document.querySelector('#detail-sect');
    try {
      const restaurant = await EaterSource.detail(url.id);

      rootElement.innerHTML = createDetailTemplate(restaurant);

      this._renderContent(rootElement, restaurant);
    } catch (err) {
      switch (err.message) {
        case '500':
          ErrorHandler.renderNoConnection(rootElement, '#no-internet-connection');
          break;
        default:
      }
    }
  },

  _renderContent(rootElement, restaurant) {
    this._renderMenuList(document.querySelector('.dish__menus'), restaurant.menus);
    this._renderLikeButton(rootElement, restaurant);
    this._renderCustomerReviews(rootElement, restaurant.customerReviews);
    this._renderReviewForm(rootElement, restaurant);
    this._initMenuButton('#menu-dish', 0);
    this._initMenuButton('#menu-drink', 1);
  },

  _renderLikeButton(rootElement, restaurant) {
    const lbE = document.createElement('div');
    lbE.id = 'like-button-container';
    rootElement.appendChild(lbE);
    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#like-button-container'),
      favoriteRestaurant: EaterIdb,
      restaurant,
    });
  },

  _renderMenuList(el, menus) {
    const menuList = document.createElement('menu-list');
    menuList.menus = menus;
    el.appendChild(menuList);
  },

  _renderCustomerReviews(el, reviews) {
    const customerReviews = document.createElement('customer-reviews');
    customerReviews.reviews = reviews;
    el.appendChild(customerReviews);
  },

  _renderReviewForm(el, restaurant) {
    const reviewForm = document.createElement('review-form');
    reviewForm.id = restaurant.id;
    el.appendChild(reviewForm);
  },

  _initMenuButton(el, code) {
    document.querySelector(el).addEventListener('click', () => {
      document.querySelector('menu-list').setAttribute('code', code);
      document.querySelector('button.active').classList.remove('active');
      document.querySelector(el).classList.add('active');
    });
  },
};

export default Detail;
