const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
  it('should return the restaurant that has been added', async () => {
    favoriteRestaurant.addFavorites({id: 1});
    favoriteRestaurant.addFavorites({id: 2});

    expect(await favoriteRestaurant.getRestaurant(1)).toEqual({id: 1})
    expect(await favoriteRestaurant.getRestaurant(2)).toEqual({id: 2})
    expect(await favoriteRestaurant.getRestaurant(undefined)).toEqual(undefined)
  })

  it('should refuse a restaurant from being added if it does not have the correct property!', async () => {
    favoriteRestaurant.addFavorites({aProperty: 'property'})

    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([]);
  })

  it('can return all of the restaurants that have been added', async () => {
    favoriteRestaurant.addFavorites({id: 1});
    favoriteRestaurant.addFavorites({id: 2})

    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([{id: 1}, {id: 2}])
  })

  it('should remove favorite restaurant', async () => {
    favoriteRestaurant.addFavorites({id: 1})
    favoriteRestaurant.addFavorites({id: 2})
    favoriteRestaurant.addFavorites({id: 3})

    await favoriteRestaurant.deleteRestaurant(1);

    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([{id: 2}, {id: 3}])
  })

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favoriteRestaurant.addFavorites({id: 1})
    favoriteRestaurant.addFavorites({id: 2})
    favoriteRestaurant.addFavorites({id: 3})

    favoriteRestaurant.deleteRestaurant(4)

    expect(await favoriteRestaurant.getAllRestaurants())
      .toEqual([{id: 1}, {id: 2}, {id: 3}])
  })
}

export {itActsAsFavoriteRestaurantModel}