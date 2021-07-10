import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteRestaurant: EaterIdb, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurants = EaterIdb

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },

  async _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();
    const likeButton = document.querySelector('#likeButton');

    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.addFavorites(this._restaurant);
      this._animateIcon(likeButton);
      setTimeout(() => {
        this._renderButton();
      }, 400);
    });
  },

  async _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
      this._animateIcon(likeButton);
      setTimeout(() => {
        this._renderButton();
      }, 400);
    });
  },

  _animateIcon(likeButton) {
    likeButton.classList.add('clicked');
    document.querySelector('#lk-button').classList.toggle('far');
    document.querySelector('#lk-button').classList.toggle('fas');
  },
};

export default LikeButtonPresenter;
