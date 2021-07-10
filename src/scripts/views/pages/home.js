import EaterSource from '../../data/eater-source';
import '../../components/search-bar';

const Home = {
  async render() {
    return `
    <section id='catalogue-sect'>
      <h2 tabindex="0">Our Collections!</h2>
      <h3 class="description" tabindex="0">From the best to common.</h3>
      <search-bar></search-bar>
      <catalogue-list></catalogue-list>
    </section>
    
    `;
  },

  async afterRender() {
    const catalogueListElement = document.querySelector('catalogue-list');
    try {
      const restaurants = await EaterSource.homeContent();
      catalogueListElement.restaurants = restaurants;
    } catch (err) {
      catalogueListElement.error = err;
    }
  },
};

export default Home;
