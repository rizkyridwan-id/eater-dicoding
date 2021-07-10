const likeFirstRestaurant = require("./utils/likeFirstRestaurant");

Feature('Like Restaurant');

Before(({I}) => {
  I.amOnPage('/#/favorites');
})

Scenario('Like One Restaurant Process', async ({ I }) => {
  likeFirstRestaurant(I)
});