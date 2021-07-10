import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import EaterIdb from "../../src/scripts/data/eater-idb"

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: EaterIdb,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
