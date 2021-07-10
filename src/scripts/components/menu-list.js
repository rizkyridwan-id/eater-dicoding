class MenuList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set menus(value) {
    this._menus = value;
    this.render();
  }

  render() {
    const menus = this._menus || {};
    const code = Number(this._code) || 0;
    const dishes = code ? menus.drinks : menus.foods;
    this.innerHTML = '';
    const rootElement = document.createElement('ul');
    dishes.map((dish) => rootElement.innerHTML += `<li>${dish.name}</li>`);
    this.appendChild(rootElement);
  }

  attributeChangedCallback(attr, old, val) {
    this._code = val;
    this.render();
  }

  static get observedAttributes() {
    return ['code'];
  }
}

customElements.define('menu-list', MenuList);
