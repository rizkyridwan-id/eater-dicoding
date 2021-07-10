class NavBar extends HTMLElement {
  connectedCallback() {
    return this.render();
  }

  render() {
    this.innerHTML = `
    <p class='nav-title'>Navigation</p>
        <ul>
            <li>
                <a href="#/">Home</a>
            </li>
            <li>
                <a href="#/favorites">Favorite</a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/muhammad-rizky-b01b511b2/">About Us</a>
            </li>
        </ul>
        <div class="nav__image-wrapper">
          <img class="nav__image" src="icons/192x192.png" alt="icon"/>

        </div>
        `;
  }
}

customElements.define('nav-bar', NavBar);
