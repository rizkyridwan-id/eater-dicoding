class AppHero extends HTMLElement {
  connectedCallback() {
    return this.render();
  }

  render() {
    this.innerHTML = `
    <div id="hero">
    <div class="hero__paralax">
    <picture>
    <source class="hero-back" media="(max-width: 600px)" srcset="images/heros/hero-image_1-small.jpg">
    <img class="hero-back" src="images/heros/hero-image_1.jpg" alt="" height="240"></img>

    </picture>
    </div>
    <div class="hero__paralax hero-inner">
            <h1 class='hero-title' tabindex="0">Explore Culinary!</h1>
            <div class="hero-separator"></div>
            <p class='hero-caption' tabindex="0">Start Exploring Culinary world and find your favorite restaurants with ease!</p>
        </div>
        </div>`;
  }
}

customElements.define('app-hero', AppHero);
