import './partner-image';

class PartnerList extends HTMLElement {
  set partners(value) {
    this._partners = value;
    this.render(value);
  }

  get partners() {
    return this._partners;
  }

  connectedCallback() {
    this.render();
  }

  render(partners = []) {
    this.innerHTML = '';

    const { length } = partners;
    const rootElement = document.createElement('article');
    rootElement.id = 'partner-gallery';

    if (length) {
      partners.map((partner) => {
        const partnerRoot = document.createElement('div');
        const partnerImage = document.createElement('partner-image');
        partnerImage.partner = partner;

        partnerRoot.appendChild(partnerImage);
        rootElement.appendChild(partnerRoot);
        return true;
      });
    }
    this.appendChild(rootElement);
  }
}

customElements.define('partner-list', PartnerList);
