import ButtonConclude from './concludeTask.js'
import ButtonDelete from './deleteTask.js'
import { loadTask } from './loadTask.js'

export function handleNewItem(event) {
  event.preventDefault()
  const tasks = JSON.parse(localStorage.getItem('tasks')) || []
  const input = document.querySelector('[data-form-input]')
  const valueInput = input.value

  const calendar = document.querySelector('[data-form-date]')
  const date = moment(calendar.value)
  const hour = date.format('HH:mm')
  const formattedDate = date.format('DD/MM/YYYY') //, h:mm:ss a'
  const concluded = false

  const datas = {
    valueInput,
    formattedDate,
    hour,
    concluded
  }

  const updatedTask = [...tasks, datas]

  localStorage.setItem('tasks', JSON.stringify(updatedTask))

  input.value = ''

  loadTask()
}

export const Task = ({ valueInput, hour, concluded }, id) => {
  const task = document.createElement('li')

  const content = `<p class="content">${hour} - ${valueInput}</p>`

  if (concluded) {
    task.classList.add('done')
  }

  task.classList.add('task')

  task.innerHTML = content
  task.appendChild(ButtonConclude(loadTask, id ))
  task.appendChild(ButtonDelete(loadTask, id))

  return task
}
