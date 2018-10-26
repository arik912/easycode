let btn = document.querySelector('button');
let users = document.querySelector('.users');
let ul = document.querySelector('ul');
let name = document.querySelector('.name');
let gender = document.querySelector('.gender');
let job = document.querySelector('.job');
let info = document.querySelector('.info');
let close = document.querySelector('.close');
close.addEventListener('click',(e) => {
  info.style.display = 'none';
});
btn.addEventListener('click',(e) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET','users.json');
    xhr.send();
    xhr.addEventListener('readystatechange',(e) => {
      console.log(xhr.status);
      if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
          let error = xhr.status;
          reject(error);
        } else {
          resolve(xhr);
        }
      });
  }).then((xhr)=>{
    JSON.parse(xhr.responseText).forEach((item) => {
      let newLi = document.createElement('li');
      newLi.innerHTML = `${item.name}`;
      ul.appendChild(newLi);

      newLi.addEventListener('click',(e) => {
        info.style.display = 'block';
        name.innerHTML = `${Object.getOwnPropertyNames(item)[0]} : ${item.name}`;
        gender.innerHTML = `${Object.getOwnPropertyNames(item)[1]} : ${item.gender}`;
        job.innerHTML = `${Object.getOwnPropertyNames(item)[2]} : ${item.job}`;
        console.log(item);
      });
    })
  }).catch((error) => console.error(error));
});