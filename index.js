
//   // ваш код поместить тут
//   let text = document.querySelector('p').textContent;
//   console.log(text);
//   let checkNode = node => {
//     node = document.querySelector(node);
//     let a = node.childNodes !== null ? node.childNodes : 0;
//     return {
//       name: node.nodeName,
//       type: node.nodeType,
//       hasChildren: a
//     }
//   }
//   console.log(checkNode('p'))

//   let getTextFromUl = (ul) =>{
//     ul = ul.children;
//     let resoult = [];
//     for(let i = 0; i < ul.length; i++){
//       resoult.push(ul[i].querySelector('a').textContent);
//     }
//     return console.log(resoult);
//   }
//   let ul1 = document.querySelector('ul');
//   getTextFromUl(ul1);

// //4
// console.log(document.querySelector('p').childNodes)
// let allChildNodes = document.querySelector('p').childNodes;
// allChildNodes.forEach((element) =>{
// if(element.nodeType == 3 ){
//     element.data = '-text-';
//   }
// })

/// nodes - задачи
ul = document.querySelector('ul');

ul.classList.add('list');

ul.nextElementSibling.nextElementSibling.setAttribute('id','link');

let ulArr = ul.children; 
let setItem = () =>{
  for(let i = 0; i < ulArr.length; i++){
    if(i % 2 == 0){
      ulArr[i].classList.add('item');
    }
  }
}
setItem();
console.log(document.querySelectorAll('a').forEach((element)=>element.classList.add('custom-link')));

class SupperConstructor{
  constructor(node){
    this.node = node;
  }
  getInfo(){
    tagName = node.tagName;
    childrenCount = node.childNodes.length;
    nodeParentElement = node.parentElement;
    return {
      'tagName': tagName,
      'childrenCount': childrenCount,
      'nodeParentElement': nodeParentElement
    }
  }
  attr(name,value){
    if(value == undefined){
      return this.node.getAttribute(name);
    }else {
      return this.node.setAttribute(name,value);
    }
  }
  text(value){
    if(value == undefined){ 
      return this.node.textContent;
    }else {
      return this.node.textContent = value;
    }
  }
}
let node = document.querySelector('a');
let node1 = new SupperConstructor(node);
console.log(node1.attr('href'));
node1.attr('href','contacts');
console.log(node1.attr('href'));




