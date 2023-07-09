const tasks = Array.from(document.querySelectorAll('#list li'));
const form = document.querySelector('.add-task');

tasks.forEach(task => task.addEventListener('click', function(e){
  if ((e.target.classList.toString()).includes('empty')){
    e.target.classList.remove('empty');
    e.target.classList.add('checked');
  }
  else{
    e.target.classList.remove('checked');
    e.target.classList.add('empty');
  }
}))

