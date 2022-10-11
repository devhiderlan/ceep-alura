const ButtonConclude = () => {
  const buttonConclude = document.createElement('button')
  buttonConclude.classList.add('check-button')
  buttonConclude.innerText = 'Concluir'
  buttonConclude.addEventListener('click', finishTask)
  return buttonConclude
}

const finishTask = event => {
  const buttonConclude = event.target
  const taskComplete = buttonConclude.parentElement
  taskComplete.classList.toggle('done')
}

export default ButtonConclude
