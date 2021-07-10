import rater from 'rater-js';
import API_ENDPOINT from '../global/api-endpoint';

class CatalogueCard extends HTMLElement {
  connectedCallback() {
    return this.render();
  }

  set restaurant(value) {
    this._restaurant = value;
    this.render(value);
  }

  get restaurant() {
    return this.restaurant;
  }

  render(restaurant = {}) {
    const { length } = Object.keys(restaurant);

    if (length > 0) {
      this.innerHTML = `
      <div class="catalogue-header">
      <img class="lazyload" height="200" alt="restaurant image" data-src="${API_ENDPOINT.IMAGE_M(restaurant.pictureId)}" style="position: absolute; width: 100%; height: auto">
      <div class="catalogue-city">
        ${restaurant.city}
      </div>
    </div>
    <div class="catalogue-content">
      <h3 class="catalogue-title">
        <a href="#/detail/${restaurant.id}">${restaurant.name}</a>
      </h3>
      <div class='rate-section'>
        <div id="r-${restaurant.id}"></div>
        <span>
           <b>${restaurant.rating}</b>/<small>5</small>
        </span>
      </div>
      <p class="catalogue-description">
        ${restaurant.description}
      </p>
    </div>
      
      `;

      this._renderRating(restaurant.id, restaurant.rating);
    }
  }

  _renderRating(id, rating) {
    rater({
      max: 5,
      readOnly: true,
      rating,
      element: this.querySelector(`#r-${id}`),
    });
  }
}

customElements.define('catalogue-card', CatalogueCard);
