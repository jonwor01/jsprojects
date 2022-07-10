const date = document.getElementById('date');
const month = document.getElementById('month');
const year = document.getElementById('year');

console.log(date, month, year)
const getDay = document.getElementById('getDay');
const result = document.getElementById('result');


getDay.addEventListener('click',()=> {
    let dateObj = new Date(`${date.value} ${month.value}${year.value}`);
    console.log(date);
})