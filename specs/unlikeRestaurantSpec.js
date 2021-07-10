import EaterIdb from '../src/scripts/data/eater-idb';
import * as TestFactories from './helpers/testFactories'

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Restaurant Unlike Feature test', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await EaterIdb.addFavorites({ id: 1 });
  });

  afterEach(async () => {
    await EaterIdb.deleteRestaurant(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({id: 1})

    expect(document.querySelector('[aria-label="unlike restaurant"]')).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({id: 1})

    expect(document.querySelector('[aria-label="like restaurant"]')).toBeFalsy();
  });

  it('shoule be able to to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({id: 1})

    document.querySelector('[aria-label="unlike restaurant"]').dispatchEvent(new Event('click'));

    expect(await EaterIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({id: 1})

    await EaterIdb.deleteRestaurant(1);

    document.querySelector('[aria-label="unlike restaurant"]').dispatchEvent(new Event('click'));

    expect(await EaterIdb.getAllRestaurants()).toEqual([]);
  });
});
