const taskInput = document.querySelector('#input');
const inputButton = document.querySelector('#input-button')
const taskList = document.querySelector('#task-list')

inputButton.addEventListener('click', addTask);
taskList.addEventListener('click', removeTask);

function addTask(e) {
    if (taskInput.value === "") {
        alert('Scrivi qualcosa')
    } else {
        // Creare nuovo li e aggiungere classe
        const li = document.createElement('li')
        li.className = 'task';
        // Creare nuovo text node e metterlo dentro li
        li.appendChild(document.createTextNode(taskInput.value))

        // creare link
        const link = document.createElement('a');

        // aggiungere classe alla <a>
        link.className = 'delete-todo'

        // aggiungere x al <a></a>
        link.innerHTML = '<h3>X</h3>'

        // mettere link nel li
        li.appendChild(link)


        // mettere li dentro ul
        taskList.appendChild(li)


        taskInput.value = ''

        // console.log(li)
    }



    e.preventDefault()
}

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-todo')) {
        e.target.parentElement.parentElement.remove();
    }
}
