export const formatDateFromApi = date => {
  let newDateToArr = date.split("T")
  let newDateHour = newDateToArr[1].split("-")[0]
  let newDate = newDateToArr[0]

  return `${newDateHour} ${newDate}`
}
