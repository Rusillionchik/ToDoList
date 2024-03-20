const divContainer = document.querySelector('.container');
const highTask = document.querySelector('.high-task-container');
const form = document.querySelector('.input-wrapper');
const highInput = document.getElementById('highInput');
const highBtn = document.querySelector('.addHighTask');
const lowInput = document.querySelector('.lowInput');
const lowBtn = document.querySelector('.addLowTask');

const toDo = [];

const createNewDiv = (textContent, classname) => {
    const newDiv = document.createElement('div')
    newDiv.textContent = textContent
    const newCheckbox = document.createElement('input')
    newCheckbox.setAttribute('type', 'checkbox');
    const newBtn = document.createElement('button')
    newBtn.textContent = '-'
    newDiv.appendChild(newCheckbox)
    newDiv.appendChild(newBtn)
    newDiv.className = classname
    newBtn.className = 'newBtn'
    return newDiv
}

const newBtn = document.createElement('button')
newBtn.textContent = '-'

const newValue = (event) => {
    event.preventDefault()
    const highInputValue = highInput.value
    toDo.push(highInputValue)
    const newDiv = document.createElement('div')
    newDiv.textContent = highInputValue
    highTask.appendChild(createNewDiv(highInputValue, 'div-class'))
    highInput.value = ''
}

form.addEventListener('submit', newValue)


