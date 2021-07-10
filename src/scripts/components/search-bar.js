import EaterSource from '../data/eater-source';

class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
    this._button = this.querySelector('#search-button');
    this._input = this.querySelector('#search-input');
    this._form = this.querySelector('#search-form');
    this._catalogueListElement = document.querySelector('catalogue-list');
    this._assignSubmit();
    this._assignAnimation();
  }

  render() {
    this.innerHTML = `
    <div class="search-box">
      <form id="search-form">
      <input class="search-input" type="text" placeholder="Search Restaurants..." id="search-input" name="search">
      <button type="submit" class="search-button" id="search-button">
        <i class="far fa-search"></i>
      </button>
      </form>
    </div>
    `;
  }

  _assignSubmit() {
    this._form.addEventListener('submit', async (event) => {
      event.preventDefault();
      try {
        this._input.blur();
        const restaurants = await EaterSource.search(document.querySelector('#search-input').value);
        this._catalogueListElement.restaurants = restaurants;
      } catch (err) {
        this._catalogueListElement.error = err;
      }
    });
  }

  _assignAnimation() {
    this._input.addEventListener('input', ({ target }) => {
      const { value } = target;
      if (!value) {
        this._button.classList.remove('active');
        return;
      }
      this._button.classList.add('active');
    });
  }
}

customElements.define('search-bar', SearchBar);
