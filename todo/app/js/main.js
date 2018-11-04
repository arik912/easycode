let show = document.querySelector('.show')
let form = document.forms[0];
let ul = document.querySelector('ul');
let taskBody = document.querySelector('.body');
let checkbox = document.querySelector('.checkbox');
show.addEventListener('click',(e) => {
  form.style.display = 'block';
});

class Todo {
  constructor(){
    this.arrCash = [];
  }
  createTask(){
    let newTask = {
      completed: checkbox.checked,
      body: taskBody.value
    }
    this.arrCash.push(newTask);
  }

  async defoultTask(){
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await response.json()
    this.arrCash.push(data);
    // console.log(this.arrCash);
    todo.render();
  }

  render(){
    ul.innerHTML = this.arrCash.map(el => (`
      <li class="tasks">
      <input type="checkbox" class="checkbox" checked=${el.completed} />
      <div class="task__body">${el.title}</div>
      <button class="task__button">delete</button>
      </li>
      `)).join('');
    console.log(this.arrCash);
  }
}
let todo = new Todo();
todo.defoultTask();
todo.defoultTask();
