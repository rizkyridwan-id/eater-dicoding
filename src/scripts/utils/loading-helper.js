const LoadingHelper = {
  showLoading() {
    document.querySelector('#loading').classList.add('active');
  },
  hideLoading() {
    document.querySelector('#loading').classList.remove('active');
  },
};

export default LoadingHelper;
