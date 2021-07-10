class AppFooter extends HTMLElement {
  connectedCallback() {
    return this.render();
  }

  render() {
    this.innerHTML = `
    <p align="center" tabindex="0">
        Copyright &copy; 2020 - Eater
        </p>
    `;
  }
}

customElements.define('app-footer', AppFooter);
