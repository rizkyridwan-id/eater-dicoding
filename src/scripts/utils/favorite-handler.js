import { createNoFavorites } from "../views/templates/template-creator"

const FavoriteHandler = {
  renderNoFavorites(el) {
    el.innerHTML = createNoFavorites()
  }
}

export default FavoriteHandler