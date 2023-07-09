const task = document.querySelector('#list');
const form = document.querySelector('.add-task');
const input = document.querySelector('[name="task"]');
const list = document.querySelector('#list');

list.innerHTML = localStorage.getItem('items') || '<li>...Enter Your Tasks</li>';


task.addEventListener('click', function(e){
  if ((e.target.classList.toString()).includes('empty')){
    e.target.classList.remove('empty');
    e.target.classList.add('checked');
  }
  else if ((e.target.classList.toString()).includes('checked')){
    e.target.classList.remove('checked');
    e.target.classList.add('empty');
  }
  localStorage.setItem('items', list.innerHTML)
})

form.addEventListener('submit', e => {
  e.preventDefault();
  let value = input.value;
  if (list.innerHTML.includes('...Enter Your Tasks')){
    list.innerHTML=`
  <li class="empty"><span>${value}</span> &nbsp;<button class="opt" id="delete"><i class="fa fa-trash-o delete item"></i></button></li>
  `;
  }
  else{
  list.innerHTML+=`
  <li class="empty"><span>${value}</span> &nbsp;<button class="opt" id="delete"><i class="fa fa-trash-o delete item"></i></button></li>
  `;
  }
  input.value = ''
  localStorage.setItem('items', list.innerHTML)
})

document.querySelector('#list li').addEventListener('click', function(e){
  if (e.target.classList.contains('opt')) {
    if (e.target.id === 'edit'){
      e.target.siblings("span").setAttribute('contenteditable');
      let r = document.createRange();
      r.selectNodeContents(e.target.siblings("span"));
      var sel=window.getSelection(); 
      sel.removeAllRanges(); 
      sel.addRange(r); 
    }
  }
})