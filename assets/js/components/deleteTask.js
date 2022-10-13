const deleteTask = (update, id) => {
  const index = id
  const insertedTask = JSON.parse(localStorage.getItem('tasks'))

  insertedTask.splice(index, 1)
  localStorage.setItem('tasks', JSON.stringify(insertedTask))

  update()
}

const ButtonDelete = (update, id) => {
  const buttonDelete = document.createElement('button')
  buttonDelete.classList.add('delete-button')
  buttonDelete.innerText = 'Deletar'
  buttonDelete.addEventListener('click', () => deleteTask(update, id))
  return buttonDelete
}

export default ButtonDelete
