const ButtonDelete = () => {
  const buttonDelete = document.createElement('button')
  buttonDelete.classList.add('delete-button')
  buttonDelete.innerText = 'Deletar'
  buttonDelete.addEventListener('click', deleteTask)
  return buttonDelete
}

const deleteTask = event => {
  const buttonDelete = event.target
  const taskDeleted = buttonDelete.parentElement
  taskDeleted.remove()
}

export default ButtonDelete
