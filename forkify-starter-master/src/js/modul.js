import { renderAllItems, renderItemInfo} from './view';
export default class Modul{
  constructor(){
    this.searchField = document.querySelector('.search__field');
    // this.key = 'e7e6a4534e2af4c003ec10f853cfbd88';
    this.key = '5f17ae6894ff656ae91c812db97e8b77';
    this.BASE_URL = 'https://www.food2fork.com';
    this.searchBtn = document.querySelector('.btn');
    this.ul = document.querySelector('.results__list');
  }
  getSearchItems(){
    fetch(`${this.BASE_URL}/api/search?key=${this.key}&q=${this.searchField.value}`)
      .then(res => res.json())
      .then(({ error, recipes }) => {
        if (error) throw Error('limit');
        renderAllItems(recipes);
      })
      .catch(console.warn);
  }
  getItemInfo(){

    const { id } = event.path.find(el => el.nodeName === 'LI');

    fetch(`${this.BASE_URL}/api/get?key=${this.key}&rId=${id}`)
      .then(res => res.json())
      .then(json => renderItemInfo(json));
  }
  handller(){
    this.searchBtn.addEventListener('click',(e) => {
      e.preventDefault();
      this.getSearchItems();
    });
    this.ul.addEventListener('click',(e) => {
      e.preventDefault();
      this.getItemInfo();
    });
  }
}
