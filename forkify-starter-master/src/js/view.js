export let renderAllItems = (recipes) =>{
  let ul = document.querySelector('.results__list');
  ul.innerHTML += recipes.map((el) => `
    <li id="${el.recipe_id}">
      <div class="results__link results__link--active">
        <figure class="results__fig">
          <img src="${el.image_url}" alt="Test">
        </figure>
        <div class="results__data">
          <h4 class="results__name">${el.title}</h4>
          <p class="results__author">The Pioneer Woman</p>
          <input type='hidden' value='${el.recipe_id}'>
        </div>
      </div>
    </li>
  `).join('');
};

export let renderItemInfo = (json) =>{
    const recipe = document.querySelector('.recipe');
    recipe.innerHTML = `
      <figure class="recipe__fig">
        <img src='${json.recipe.image_url}' class="recipe__img">
        <h1 class="recipe__title">
          <span>${json.recipe.title}</span>
        </h1>
      </figure>

      <div class="recipe__ingredients">
        <ul class="recipe__ingredient-list">
          <li class="recipe__item">
            <svg class="recipe__icon">
              <use href="img/icons.svg#icon-check"></use>
            </svg>
            <div class="recipe__count">4</div>
            <div class="recipe__ingredient">
              <span class="recipe__unit">g</span>
              ${json.recipe.ingredients[0]}
            </div>
          </li>

          <li class="recipe__item">
            <svg class="recipe__icon">
              <use href="img/icons.svg#icon-check"></use>
            </svg>
            <div class="recipe__count">1/2</div>
            <div class="recipe__ingredient">
              <span class="recipe__unit">cup</span>
              ${json.recipe.ingredients[1]}
            </div>
          </li>

          <li class="recipe__item">
            <svg class="recipe__icon">
              <use href="img/icons.svg#icon-check"></use>
            </svg>
            <div class="recipe__count">1</div>
            <div class="recipe__ingredient">
              <span class="recipe__unit"></span>
              ${json.recipe.ingredients[2]}
            </div>
          </li>

          <li class="recipe__item">
            <svg class="recipe__icon">
              <use href="img/icons.svg#icon-check"></use>
            </svg>
            <div class="recipe__count">1</div>
            <div class="recipe__ingredient">
              <span class="recipe__unit"></span>
              ${json.recipe.ingredients[3]}
            </div>
          </li>

          <li class="recipe__item">
            <svg class="recipe__icon">
              <use href="img/icons.svg#icon-check"></use>
            </svg>
            <div class="recipe__count">1/2</div>
            <div class="recipe__ingredient">
              <span class="recipe__unit">cup</span>
              ${json.recipe.ingredients[4]}
            </div>
          </li>

          <li class="recipe__item">
            <svg class="recipe__icon">
              <use href="img/icons.svg#icon-check"></use>
            </svg>
            <div class="recipe__count">1/4</div>
            <div class="recipe__ingredient">
              <span class="recipe__unit">cup</span>
              ${json.recipe.ingredients[5]}
            </div>
          </li>
        </ul>
      </div>

      <div class="recipe__directions">
        <h2 class="heading-2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__by">${json.recipe.publisher}</span>. Please check out directions at their website.
        </p>
        <a class="btn-small recipe__btn" href="${json.recipe.source_url}" target="_blank">
          <span>Directions</span>
          <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-right"></use>
          </svg>
        </a>
      </div>
    `;

}
