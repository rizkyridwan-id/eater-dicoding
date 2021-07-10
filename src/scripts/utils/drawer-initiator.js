const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, button);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, button);
    });
  },

  _toggleDrawer(event, drawer, button) {
    event.stopPropagation();

    this._animate(button);
    this._toggleOpen(button, drawer);
  },

  _closeDrawer(event, drawer, button) {
    event.stopPropagation();

    this._animate(button);
    this._toggleOpen(button, drawer, true);
  },

  _toggleOpen(button, drawer, close) {
    drawer.classList[close ? 'remove' : 'toggle']('open');
    button.classList[close ? 'remove' : 'toggle']('opened');
    button.setAttribute('aria-expanded', button.classList.contains('opened'));
  },

  _animate(button) {
    button.classList.add('clicked');
    setTimeout(() => button.classList.remove('clicked'), 500);
  },
};

export default DrawerInitiator;
