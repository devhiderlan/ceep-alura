import { orderDates, removeDates } from '../service/date.js'
import { createDate } from './createDate.js'

export const loadTask = () => {
  const list = document.querySelector('[data-list]')

  const insertedTask = JSON.parse(localStorage.getItem('tasks')) || []

  list.innerHTML = ''

  const uniqueDates = removeDates(insertedTask)

  orderDates(uniqueDates)

  uniqueDates.forEach(day => {
    list.appendChild(createDate(day))
  })
}
