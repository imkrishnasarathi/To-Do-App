const task = document.querySelector('#list');
const form = document.querySelector('.add-task');
const input = document.querySelector('[name="task"]');
const list = document.querySelector('#list');
const mark = document.querySelector('#mark-all');
const unmark = document.querySelector('#unmark-all')

list.innerHTML = localStorage.getItem('items') || '<li>...Enter Your Tasks</li>';

if (+list.innerHTML === 0){
  list.innerHTML = '<li>...Enter Your Tasks</li>';
}

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

list.addEventListener('click', function(e) {
  if (e.target && e.target.classList.contains('delete')) {
    const listItem = e.target.closest('li');
    listItem.parentNode.removeChild(listItem);
    localStorage.setItem('items', list.innerHTML);
  }
});

mark.addEventListener('click', () => {
  Array.from(document.querySelectorAll('#list li')).forEach(item => {
    if (item.classList.toString().includes('empty')){
      item.classList.remove('empty');
      item.classList.add('checked');
    }
    else{
      return ''
    }
    localStorage.setItem('items', list.innerHTML)
  })
})

unmark.addEventListener('click', () => {
  Array.from(document.querySelectorAll('#list li')).forEach(item => {
    if (item.classList.toString().includes('checked')){
      item.classList.remove('checked');
      item.classList.add('empty');
    }
    else{
      return ''
    }
    localStorage.setItem('items', list.innerHTML)
  })
})