import DrawerInitiator from '../utils/drawer-initiator';
import LottieInitiator from '../utils/lottie-initiator';
import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';

class App {
  constructor({
    button, drawer, content, hero, loading,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._hero = hero;
    this._loading = loading;

    this._initLoading();
    this._initialAppShell();
  }

  _initialAppShell() {
    // TODO: initial drawer
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  _initLoading() {
    LottieInitiator.init('#loading-icon', 'loading.json');
  }

  toggleHero() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const isDetail = url === '/';
    if (isDetail) {
      this._heroDisplay('remove');
      return;
    }
    this._heroDisplay('add');
  }

  _heroDisplay(opt) {
    this._hero.classList[opt]('hide');
    // this._drawer.classList[opt]('my-fx');
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
