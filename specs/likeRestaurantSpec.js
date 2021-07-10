import EaterIdb from '../src/scripts/data/eater-idb';
import * as TestFactories from "./helpers/testFactories"

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('restaurants Liking Feature Test', () => {
  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show like button', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({id: 1})

    expect(document.querySelector('[aria-label="like restaurant"]'))
      .toBeTruthy();
  });

  it('should not show unlike button', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({id: 1})

    expect(document.querySelector('[aria-label="unlike restaurant"]'))
      .toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({id: 1})

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    const restaurant = await EaterIdb.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });

    await EaterIdb.deleteRestaurant(1);
  });

  it('should not add restaurant again when it has been selected', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({id: 1})

    await EaterIdb.addFavorites({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await EaterIdb.getAllRestaurants()).toEqual([{ id: 1 }]);

    await EaterIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({})

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await EaterIdb.getAllRestaurants()).toEqual([]);
  });
});
