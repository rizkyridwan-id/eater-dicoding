import { createNoInternetTemplate, createNotFoundTemplate, createSmallNoInternetTemplate } from '../views/templates/template-creator';
import LottieInitiator from './lottie-initiator';

const ErrorHandler = {
  renderNotFound(el, id) {
    el.innerHTML = createNotFoundTemplate();
    LottieInitiator.init(id, 'page_not_found.json');
  },
  renderNoConnection(el, id) {
    el.innerHTML = createNoInternetTemplate();
    LottieInitiator.init(id, 'no_connection.json');
  },
  renderSmallNoConnection(el, id) {
    el.innerHTML = createSmallNoInternetTemplate();
    LottieInitiator.init(id, 'no_connection.json');
  },
};

export default ErrorHandler;
