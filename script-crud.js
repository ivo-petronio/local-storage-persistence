//Find the "Add Task" button

const addTaskButton = document.querySelector(".app__button--add-task")
const addTaskForm = document.querySelector(".app__form-add-task")
const addTaskTextArea = document.querySelector(".app__form-textarea")
const ulTasks = document.querySelector(".app__section-task-list")

const tasks = JSON.parse(localStorage.getItem('tasks')) || []



addTaskButton.addEventListener('click', () => {
    addTaskForm.classList.toggle('hidden')
})


function createElementList(task) {
    const li = document.createElement('li')
    li.classList.add('app__section-task-list-item')
    const svg = document.createElement('svg')
    svg.innerHTML = `
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>
    `
    const paragraphy = document.createElement('p')
    paragraphy.classList.add('app__section-task-list-item-description')
    paragraphy.textContent = task.description

    const button = document.createElement('button')
    button.classList.add('app_button-edit')
    const imgButton = document.createElement('img')
    imgButton.setAttribute('src', './imagens/edit.png')
    button.append(imgButton)
    li.append(svg)
    li.append(paragraphy)
    li.append(button)
    return li
}


addTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const task = {
        description: addTaskTextArea.value
    }

    tasks.push(task);
    const includedTask = createElementList(task)
    ulTasks.append(includedTask)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    addTaskTextArea.value = ""
    addTaskForm.classList.toggle('hidden')
})

tasks.forEach(task => {
    const elementTask = createElementList(task)
    ulTasks.append(elementTask);
})