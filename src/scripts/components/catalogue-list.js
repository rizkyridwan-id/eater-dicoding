import './catalogue-card';
import ErrorHandler from '../utils/error-handler';
import UrlParser from '../routes/url-parser';
import FavoriteHandler from '../utils/favorite-handler';

class CatalogueList extends HTMLElement {
  set restaurants(value) {
    this._restaurants = value;
    this.render(value);
  }

  get restaurants() {
    return this._restaurants;
  }

  set error(value) {
    this._error = value;
    this.render();
  }

  connectedCallback() {
    return this.render();
  }

  render(restaurants) {
    this.innerHTML = '';
    const rootElement = document.createElement('div');
    rootElement.id = 'popular-card';

    if (restaurants && restaurants[0]) {
      restaurants.map((restaurant) => {
        const rootContent = this._renderArticle();
        const contentElement = this._renderCard(restaurant);

        rootContent.appendChild(contentElement);
        rootElement.appendChild(rootContent);
        return true;
      });
    } else if (Array.isArray(restaurants) && !restaurants.length) {
      this._renderNotFound(rootElement);
      return;
    } else if (this._error) {
      this._renderNoConnection(rootElement);
      return;
    } else if (!restaurants && UrlParser.parseActiveUrlWithCombiner() === '/favorites') {
      this._renderNoFavorite(rootElement)
    }
    this.appendChild(rootElement);
  }

  _renderArticle() {
    const el = document.createElement('article');
    el.tabIndex = 0;
    el.classList.add('catalogue-card');
    return el;
  }

  _renderCard(restaurant) {
    const el = document.createElement('catalogue-card');
    el.restaurant = restaurant;
    return el;
  }

  _renderNotFound(rootElement) {
    this.appendChild(rootElement);
    ErrorHandler.renderNotFound(this, '#not-found-lottie');
  }

  _renderNoConnection(rootElement) {
    this.appendChild(rootElement);
    ErrorHandler.renderSmallNoConnection(this, '#no-connection-lottie');
  }

  _renderNoFavorite(rootElement) {
    this.appendChild(rootElement);
    FavoriteHandler.renderNoFavorites(this)
  }
}

customElements.define('catalogue-list', CatalogueList);
