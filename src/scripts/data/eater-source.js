import API_ENDPOINT from '../global/api-endpoint';
import LoadingHelper from '../utils/loading-helper';

class EaterSource {
  static async homeContent() {
    try {
      const response = await EaterSource._asyncFetch(API_ENDPOINT.HOME);
      return response.restaurants;
    } catch (err) {
      throw new Error('500');
    }
  }

  static async detail(id) {
    try {
      const response = await EaterSource._asyncFetch(API_ENDPOINT.DETAIL(id));
      return response.restaurant;
    } catch (err) {
      throw new Error('500');
    }
  }

  static async search(query) {
    try {
      const response = await EaterSource._asyncFetch(API_ENDPOINT.SEARCH(query));
      return response.restaurants;
    } catch (err) {
      throw new Error('500');
    }
  }

  static async addReview(data) {
    try {
      const response = await EaterSource._asyncPost(API_ENDPOINT.ADD_REVIEW, data);
      return response.customerReviews;
    } catch (err) {
      throw new Error('500');
    }
  }

  static async _asyncFetch(url) {
    LoadingHelper.showLoading();
    try {
      let r = await fetch(url);
      r = await r.json();
      LoadingHelper.hideLoading();
      return r;
    } catch (error) {
      LoadingHelper.hideLoading();
      throw new Error(error.message);
    }
  }

  static async _asyncPost(url, body) {
    const options = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json',
        'X-Auth-Token': 12345,
      },
    };
    LoadingHelper.showLoading();
    try {
      let r = await fetch(url, options);
      r = await r.json();
      LoadingHelper.hideLoading();
      return r;
    } catch (error) {
      LoadingHelper.hideLoading();
      throw new Error(error.message);
    }
  }
}

export default EaterSource;
