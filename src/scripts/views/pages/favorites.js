import EaterIdb from '../../data/eater-idb';

const Favorites = {
  async render() {
    return `
    <section id='favorites-sect'>
      <h2 tabindex="0">My Favorites</h2>
      <h3 class="description" tabindex="0">Your Favorite Restaurants will be here!</h3>
      <catalogue-list></catalogue-list>
    </section>
    `;
  },

  async afterRender() {
    // For fetching content
    const restaurants = await EaterIdb.getAllRestaurants();
    const catalogueListElement = document.querySelector('catalogue-list');
    catalogueListElement.restaurants = restaurants[0] ? restaurants : undefined;
  },
};

export default Favorites;
