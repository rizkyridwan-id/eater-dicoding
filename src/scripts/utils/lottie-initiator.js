const LottieInitiator = {
  init(el, src, parent = document, loop = true) {
    this._el = el;
    this._src = src;
    this._loop = loop;
    this._parent = parent;

    this._renderLottie();
  },

  _renderLottie() {
    import(/* webpackChunkName: "lottie-web" */ 'lottie-web/build/player/lottie_light')
      .then((module) => module.default)
      .then((lottie) => lottie.loadAnimation({
        container: this._parent.querySelector(this._el),
        renderer: 'svg',
        loop: this._loop,
        autoplay: true,
        path: this._src,
      }))
      .catch((error) => {console.log(error)})
  },
};

export default LottieInitiator;
