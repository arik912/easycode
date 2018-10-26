let show = document.querySelector('.show')
let form = document.forms[0];
let ul = document.querySelector('ul');
show.addEventListener('click',(e) => {
  form.style.display = 'block';
});
let checkStorage = () => {
  if(localStorage.length == 0){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json =>{
      let newArr = json.map((el)=>{
        let arr ={
          title: el.title,
          body: el.body
        }
        return arr
      })
      newArr.length = 5;
      return newArr;
    })
    .then(arr => arr.map((el,ind) => {
      localStorage[`${ind}`] = JSON.stringify(el);
    }))
  }
}
checkStorage();
let ls = localStorage;
console.log(ls);

let createLi = () => {
  for (let i = 0; i < localStorage.length; i++){
    let li = document.createElement('li');
    let title = JSON.parse(localStorage.getItem(localStorage.key(i))).title;
    let body = JSON.parse(localStorage.getItem(localStorage.key(i))).body;
    li.innerHTML = `<div class="status">
    <input type="checkbox" class="checkbox">  
    </div>
    <div class="task__title">${title}</div>
    <div class="task__body">${body}</div>  
    <button class="task__delit">dell</button>`;
    ul.appendChild(li);
  }
}
createLi();
form.addEventListener('submit',(e) => {
  e.preventDefault()
  let newTask = {
    title: document.querySelector('.title').value,
    body: document.querySelector('.body').value
  }
  let name = document.querySelector('.title').value;
  localStorage[`${name}`] = JSON.stringify(newTask);
  console.log(localStorage.newTask)
  document.querySelector('.title').value = '';
  body: document.querySelector('.body').value = '';
  form.style.display = 'none';
  alert('successful');
});
for(var key in localStorage){
  console.log(key);
}




