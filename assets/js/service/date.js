export const removeDates = (dates) =>{
  const uniqueDates = []
  dates.forEach(date => {
    if (uniqueDates.indexOf(date.formattedDate) === -1) {
      uniqueDates.push(date.formattedDate)
    }
  })
  return uniqueDates
} 

export const orderDates = (dates) => {
  dates.sort((a, b) => {
    const firstDate = moment(a, 'DD/MM/YYYY').format('YYYYMMDD')
    const secondtDate = moment(b, 'DD/MM/YYYY').format('YYYYMMDD')
    return firstDate - secondtDate
  })
}