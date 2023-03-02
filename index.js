function calculateIntervalDays(fromDate, toDate = '10/03/2023') {
    const fr = fromDate.includes('/') ? formatDate(fromDate) : fromDate
    const start = new Date(fr)
    const end = new Date(formatDate(toDate))
    console.log({start, end})
   let diferencia =  end.getTime() - start.getTime()
  let dias = diferencia / 86400000;
  return Math.floor(dias);
}
function formatDate(fecha){
    const str = fecha.split('/').reverse().join('-')
    return str
}

module.exports = {calculateIntervalDays}


document.querySelector('#name').addEventListener('blur',  (e)=> handleInputName(e.target.value))
document.querySelector('#name').addEventListener('focusout',  ()=> document.querySelector('#nameWithoutVocals').value = removeVocalsAndSpaces(document.querySelector('#name').value))

document.querySelector('#date').addEventListener('blur',  (e)=> handleInputDate(e.target.value))
document.querySelector('#date').addEventListener('focusout',  
    ()=> document.querySelector('#days').value = calculateIntervalDays(document.querySelector('#date').value))