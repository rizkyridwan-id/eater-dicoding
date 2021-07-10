class PartnerImage extends HTMLElement {
  set partner(value) {
    this._partner = value;
    this.render(value);
  }

  get partner() {
    return this._partner;
  }

  connectedCallback() {
    this.render();
  }

  render(partner) {
    if (partner) {
      this.innerHTML = `
      <div tabindex="0">
    <img src="${partner.url}" alt="${partner.name}" class="partner-image"/>
  </div>`;
    }
  }
}

customElements.define('partner-image', PartnerImage);
