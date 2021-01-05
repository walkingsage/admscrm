const statDayFirst = document.querySelector('.ts'),
valFirst = document.getElementById('stat'),
statDaySecond = document.querySelector('.ts1'),
valSecond = document.getElementById('stat1'),
datePick = document.getElementById('date2'),
datePickSec = document.getElementById('date3');


statDayFirst.addEventListener('click', () => {
    if(valFirst.value == "day"){
        datePick.style.display = "block";
    }
    else{
        datePick.style.display = "none";
    }
});

statDaySecond.addEventListener('click', () => {
    if(valSecond.value == "day"){
        datePickSec.style.display = "block";
    }
    else{
        datePickSec.style.display = "none";
    }
});