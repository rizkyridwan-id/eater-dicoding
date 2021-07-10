import {itActsAsFavoriteRestaurantModel} from "./contract/favoriteRestaurantContract"

import EaterIdb from "../src/scripts/data/eater-idb"

describe('favorite restaurant idb contract test implementation', () => {
  afterEach(async () => {
    (await EaterIdb.getAllRestaurants()).forEach(async (restaurant) => {
      await EaterIdb.deleteRestaurant(restaurant.id)
    })
  })

  itActsAsFavoriteRestaurantModel(EaterIdb)
})