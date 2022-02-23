const taskInput = document.querySelector('#input');
const inputButton = document.querySelector('#input-button');
const taskList = document.querySelector('#task-list');


inputButton.addEventListener('click', addTask);
taskList.addEventListener('click', removeTask);
taskList.addEventListener('click', completeTask);
// doneButton.addEventListener('click', completeTask());

function addTask(e){
    if (taskInput.value === ''){
        alert('Scrivi qualcosa')
    } else {
        // Creo li element
        const li = document.createElement('li')
        li.className = 'task';
        // aggiungo stringa to-do nel li
        li.appendChild(document.createTextNode(taskInput.value))
        // creo div per contenere bottoni
        const container = document.createElement('div')
        container.className = 'container'
        li.appendChild(container)
        // creo ticLink x completare to-do
        const ticLink = document.createElement('a')
        ticLink.className = 'complete-todo'
        ticLink.innerHTML = '<h3>✅</h3>'
        container.appendChild(ticLink)

        // creo ticLink x cancellare to-do
        const xLink = document.createElement('a')
        xLink.className = 'delete-todo'
        xLink.innerHTML = '<h3>❌</h3>'
        container.appendChild(xLink)


        // metto li nella task list
        taskList.appendChild(li)

       

        // cancellare input una volta aggiunta to-do
        taskInput.value = ''
    }
    // e.preventDefault()
}

function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-todo')){
        e.target.parentElement.parentElement.parentElement.remove();
    }
}

function completeTask(e) {
    if(e.target.parentElement.classList.contains('complete-todo')){
        e.target.parentElement.parentElement.parentElement.classList.add('completed');
        
    }
}