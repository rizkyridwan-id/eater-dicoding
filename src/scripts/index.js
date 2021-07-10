import 'regenerator-runtime'; /* for async await transpile */

import '../styles/main.sass';
import '../styles/responsive.sass';

import './components/nav-bar';
import './components/app-header';
import './components/app-hero';
import './components/app-footer';
import './components/catalogue-list';
import './components/detail-info';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import App from './views/app';
import swRegister from './utils/sw-register';
import LoadingHelper from './utils/loading-helper';

const navElement = document.querySelector('nav');
const mainElement = document.querySelector('main');
const heroElement = document.querySelector('#hero');
const drawerToggler = document.querySelector('#toggle');
const loadingElement = document.querySelector('#loading');

const app = new App({
  button: drawerToggler,
  drawer: navElement,
  content: mainElement,
  hero: heroElement,
  loading: loadingElement,
});

window.addEventListener('hashchange', () => {
  window.scrollTo(0, 0);
  LoadingHelper.hideLoading();
  drawerToggler.classList.remove('opened');
  navElement.classList.remove('open');
  app.toggleHero();
  app.renderPage();
});

window.addEventListener('load', () => {
  app.toggleHero();
  app.renderPage();
  swRegister();
});
