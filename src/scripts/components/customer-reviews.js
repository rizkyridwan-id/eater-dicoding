import './review-item';

class CustomerReviews extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set reviews(val) {
    this._reviews = val;
    this.render();
  }

  render() {
    this.innerHTML = '<h3 class="label">Customer Reviews</h3>';
    if (this._reviews) {
      this._reviews.map((review) => {
        const reviewElement = document.createElement('review-item');
        reviewElement.review = review;
        this.appendChild(reviewElement);
        return true;
      });
    }
  }
}

customElements.define('customer-reviews', CustomerReviews);
