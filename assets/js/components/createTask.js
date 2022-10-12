import ButtonConclude from './concludeTask.js'
import ButtonDelete from './deleteTask.js'

export function handleNewItem(event) {
  event.preventDefault()
  const tasks = JSON.parse(localStorage.getItem('tasks')) || []
  const list = document.querySelector('[data-list]')
  const input = document.querySelector('[data-form-input]')
  const valueInput = input.value

  const calendar = document.querySelector('[data-form-date]')
  const date = moment(calendar.value)
  const formattedDate = date.format('DD/MM/YYYY') //, h:mm:ss a'

  const datas = {
    valueInput,
    formattedDate
  }

  const updatedTask = [... tasks, datas]

  list.appendChild(Task(datas))

  localStorage.setItem('tasks', JSON.stringify(updatedTask))

  input.value = ''
}

export const Task = ({ valueInput, formattedDate }) => {
  const task = document.createElement('li')
  task.classList.add('task')

  const content = `<p class="content">${formattedDate} - ${valueInput}</p>`
  task.innerHTML = content
  task.appendChild(ButtonConclude())
  task.appendChild(ButtonDelete())

  return task
}
