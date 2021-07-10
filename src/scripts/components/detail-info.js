import rater from 'rater-js';

class DetailInfo extends HTMLElement {
  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
  }

  get label() {
    return this._label.replace(/^\w/, (c) => c.toUpperCase());
  }

  set label(label) {
    this._label = label;
  }

  get icon() {
    return this._icon;
  }

  set icon(value) {
    this._icon = value;
  }

  connectedCallback() {
    this.value = this.getAttribute('value');
    this.label = this.getAttribute('label');
    this.icon = this.getAttribute('icon');
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="ic">
      <i class="${this.icon}"></i>
    </div>
    <div class="content">
      <span class="description">${this.label}</span>
      ${this.label === 'Rating' ? '<div id="detail__rating"></div>' : `<h3 class="value">${this.value}</h3>`}
    </div>
    `;
    if (this.label === 'Rating') {
      this._renderRating(Number(this.value));
    }
  }

  _renderRating(rating) {
    rater({
      max: 5,
      readOnly: true,
      rating,
      element: this.querySelector('#detail__rating'),
      starSize: 20,
    });
  }
}

customElements.define('detail-info', DetailInfo);
