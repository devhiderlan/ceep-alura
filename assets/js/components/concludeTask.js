const finishTask = (update, id) => {
  
  const insertedTask = JSON.parse(localStorage.getItem('tasks')) || []

  insertedTask[id].concluded = !insertedTask[id].concluded
  localStorage.setItem('tasks', JSON.stringify(insertedTask))

  update()
}

const ButtonConclude = (update, id) => {
  const buttonConclude = document.createElement('button')
  buttonConclude.classList.add('check-button')
  buttonConclude.innerText = 'Concluir'
  buttonConclude.addEventListener('click', () => finishTask(update, id))
  return buttonConclude
}

export default ButtonConclude
