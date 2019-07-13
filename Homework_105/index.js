"use strict"
const input = document.getElementsByTagName('input')[0];
const buttonAdd = document.getElementById('buttonAdd');

buttonAdd.addEventListener('click', addToDo);
function addToDo() {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    let btnDel = document.createElement('button');
    let btnChange = document.createElement('button');
    btnDel.innerText = 'Delete';
    //  btnDel.value = input.value;
    btnChange.innerText = 'Change';
    //  btnChange.value = input.value;
    ul.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = input.value;
    li.insertAdjacentElement('afterBegin',span);
    li.insertAdjacentElement('beforeEnd',btnDel);
    li.insertAdjacentElement('beforeEnd',btnChange);
    btnDel.addEventListener('click',function(e){
        let el = e.target;
         delToDo(el);
        });
    btnChange.addEventListener('click',function(e){
      let el = e.target;
      changeToDo(el);
         });    
 
}


 function delToDo(el) {
  el.parentNode.parentNode.removeChild(el.parentNode);
 }

 

 function changeToDo(el) {
  let elParent = el.parentNode;
  let spanEl =  elParent.getElementsByTagName('span')[0];
  let inputEl = document.createElement('input');
  spanEl.appendChild(inputEl);
  let btnSave = document.createElement('button');
  btnSave.innerText = 'Save';
  spanEl.insertAdjacentElement('beforeEnd',btnSave);
  btnSave.addEventListener('click',function(e){
    let el = e.target;
    
    let elParent = el.parentNode;

    let span = elParent.getElementsByTagName('span');
    
    spanEl.innerHTML = inputEl.value;
    
    });
  
 }
  

