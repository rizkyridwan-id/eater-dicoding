const assert = require('assert')

async function likeFirstRestaurant (I) {
  // Make sure The Favorites Restaurant is empty
  I.see('You have no favorite restaurant yet!', 'catalogue-list')

  I.amOnPage('/')

  I.seeElement('.catalogue-title a')

  const firstFilm= locate('.catalogue-title a').first()
  const firstFilmTitle = await I.grabTextFrom(firstFilm)
  I.click(locate('.catalogue-title a').first())

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites')
  I.seeElement('.catalogue-card')
  const likedFilmTitle = await I.grabTextFrom('.catalogue-title a')

  assert.strictEqual(firstFilmTitle, likedFilmTitle)
}

module.exports = likeFirstRestaurant