import { itActsAsFavoriteRestaurantModel } from "./contract/favoriteRestaurantContract";

let favoriteRestaurants = []

const FavoriteRestaurantArray = {
  getRestaurant(id) {
    if(!id) {
      return;
    }

    return favoriteRestaurants.find((restaurant) => restaurant.id === id)
  },

  getAllRestaurants() {
    return favoriteRestaurants
  },

  addFavorites(restaurant) {
    if(!restaurant.hasOwnProperty('id')) {
      return;
    }

    if(this.getRestaurant(restaurant.id)) {
      return;
    }

    favoriteRestaurants.push(restaurant)
  },

  deleteRestaurant(id) {
    favoriteRestaurants = favoriteRestaurants.filter(restaurant => restaurant.id != id)
  }
}

describe('Favorite restaurant array contract test Implementation', () => {
  afterEach(() => favoriteRestaurants = [])

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray)
})