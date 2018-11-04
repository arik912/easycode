console.log('app')
const searchBtn = document.querySelector('.btn');
const searchField = document.querySelector('.search__field');
const key = 'e7e6a4534e2af4c003ec10f853cfbd88';
const ul = document.querySelector('.results__list');

searchBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  console.log(searchField.value);
  let resoult = fetch(`https://www.food2fork.com/api/search?key=${key}&q=${searchField.value}`)
  .then(response => response.json())
  .then(json => {
    console.log(json);
    json.recipes.forEach((element)=>{
      ul.innerHTML +=
      `<li id="${element.recipe_id}">
          <div class="results__link results__link--active">
              <figure class="results__fig">
                  <img src="${element.image_url}" alt="Test">
              </figure>
              <div class="results__data">
                  <h4 class="results__name">${element.title}</h4>
                  <p class="results__author">The Pioneer Woman</p>
                  <input type='text' value='${element.recipe_id}'>
              </div>
          </div>
      </li>`
    })
  })
})
ul.addEventListener('click',(event) =>{
  event.preventDefault();
  const li = event.path.find(el => el.nodeName === 'LI');

  const { id } = li;
  fetch(`https://www.food2fork.com/api/get?key=${key}&rId=${id}`)
    .then(res => res.json())
    .then(json => {
      let recipe = document.querySelector('.recipe');
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

  })
})
