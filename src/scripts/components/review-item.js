class ReviewItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set review(val) {
    this._review = val;
    this.render();
  }

  render() {
    this.innerHTML = '';
    if (this._review) {
      this.innerHTML = `
      <div class="review-wrapper">
        <p class="review__name">${this._review.name}</p>
        <p class="review__description">${this._review.review}</p>
        <p class="review__date">${this._review.date}</p>
      </div>
      `;
    }
  }
}

customElements.define('review-item', ReviewItem);
