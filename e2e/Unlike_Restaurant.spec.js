const likeFirstRestaurant = require("./utils/likeFirstRestaurant");

Feature('Unlike Restaurant')

Before(({I}) => {
  I.amOnPage('/#/favorites');

  likeFirstRestaurant(I)
})

Scenario('Unliking A Restaurant', ({I}) => {
  I.seeElement('.catalogue-title a')
  I.click(locate('.catalogue-title a'))

  I.seeElement('[aria-label="unlike restaurant"]')
  I.click(locate('#likeButton'))
  I.seeElement('[aria-label="like restaurant"]')
  
  I.amOnPage('/#/favorites')
  I.see('You have no favorite restaurant yet!', 'catalogue-list')
})