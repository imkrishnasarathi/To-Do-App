const task = document.querySelector('#list');
const form = document.querySelector('.add-task');
const input = document.querySelector('[name="task"]');
const list = document.querySelector('#list')

task.addEventListener('click', function(e){
  if ((e.target.classList.toString()).includes('empty')){
    e.target.classList.remove('empty');
    e.target.classList.add('checked');
  }
  else{
    e.target.classList.remove('checked');
    e.target.classList.add('empty');
  }
})

form.addEventListener('submit', e => {
  e.preventDefault();
  let value = input.value;
  list.innerHTML+=`
  <li class="empty"><span>${value}</span> &nbsp;<button class="opt"><i class="fa fa-pencil edit item"></i></button>&nbsp;<button class="opt"><i class="fa fa-trash-o delete item"></i></button></li>
  `;
  input.value = ''
})