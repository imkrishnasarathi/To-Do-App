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

