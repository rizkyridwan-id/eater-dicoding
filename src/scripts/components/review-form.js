import EaterSource from '../data/eater-source';

class ReviewForm extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set id(val) {
    this._id = val;
  }

  render() {
    this.innerHTML = `
      <h3 class="label">Post Your Review!</h3>
      <form autocomplete="off">
        <input type="text" name="name" placeholder="Your name" required>
        <textarea type="text" name="review" placeholder="Your Review" rows="3" required></textarea>
        <input type="submit" value="Send" style="cursor: pointer">
        <input type="reset" style="opacity: 0" id="reset">
      </form>
    `;

    this._initForm(this.querySelector('form'));
  }

  _initForm(form) {
    form.onsubmit = async (event) => {
      event.preventDefault();
      const inputs = event.target.elements;
      const { value: name } = inputs.name;
      const { value: review } = inputs.review;
      const id = this._id;
      try {
        const response = await EaterSource.addReview({ id, name, review });
        document.querySelector('customer-reviews').reviews = response;

        document.querySelector('#reset').click();
        import(/* webpackChunkName: "sweetalert2" */ 'sweetalert2')
        .then((module) => module.default)
        .then((Swal) => Swal.fire({
          title: 'Success!',
          text: 'Your Reviews has been added',
          icon: 'success',
          confirmButtonText: 'OK',
        }))
        .catch(err => {console.log(err)})
      } catch (err) {
        import(/* webpackChunkName: "sweetalert2" */ 'sweetalert2')
        .then((module) => module.default)
        .then((Swal) => Swal.fire({
          title: 'Something went wrong!',
          text: 'Please check your connection or try again later',
          icon: 'error',
          confirmButtonText: 'OK',
        }))
        .catch(err => {console.log(err)})
        
      }
    };
  }
}

customElements.define('review-form', ReviewForm);
