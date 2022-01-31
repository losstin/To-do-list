const addBtn = document.querySelector('#push');
const newtaskInp = document.querySelector('#newtask input');
const tasks = document.querySelector('#tasks');


addBtn.addEventListener('click', addTask);

function addTask() {
    if(newtaskInp.value.length == 0){
        alert('Please, enter a task!')
    }
    else{
        tasks.innerHTML += `
        <div class="task">
            <span id="taskname">
                ${newtaskInp.value}
            </span>
            <button class='delete'>
                <i class="far fa-trash-alt"></i>
            </button> 
        </div>
        `;

        let currentTask = document.querySelectorAll('.delete');

        for(let i=0; i<currentTask.length; i++){
            currentTask[i].addEventListener('click', function(){
                this.parentNode.remove();
            })
        }


        let task = document.querySelectorAll('.task');

        for(let i=0; i<task.length; i++){
            task[i].addEventListener('click', function(){
                this.classList.toggle('complited');
            })
        }

        
        newtaskInp.value = '';

    }
}


