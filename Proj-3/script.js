window.onload = () => {
    document.querySelector('#calculate').onclick = calculate;
    document.querySelector('#reset').onclick = reset;
}

function calculate() {
    const date = document.querySelector('#date').value;
    const time = document.querySelector('#time').value;

    const stop = document.querySelector('#stop');

    const endTime = new Date(date+" "+time);

    const interval = setInterval(() => calculateTime(endTime),1000);

    stop.addEventListener('click',() => {
        clearInterval(interval);
    })
}

function calculateTime(endTime) {
    const currTime = new Date();

    const days = document.querySelector('#countDay');
    const hours = document.querySelector('#countHours');
    const minutes = document.querySelector('#countMinutes');
    const seconds = document.querySelector('#countSeconds');

    if(endTime >  currTime) {
        const timeLeft = (endTime - currTime) / 1000;
        days.innerText = Math.floor(timeLeft / (24 * 60 * 60))
        hours.innerText = Math.floor((timeLeft / (60 * 60)) % 24);
        minutes.innerText = Math.floor((timeLeft / 60) % 60);
        seconds.innerText = Math.floor(timeLeft % 60);
    }else {
        days.innerText = 0;
        hours.innerText = 0;
        minutes.innerText = 0;
        seconds.innerText = 0;
    }
}

function reset() {
    document.querySelector('#countDay').innerText = 0;
    document.querySelector('#countHours').innerText = 0;
    document.querySelector('#countMinutes').innerText = 0;
    document.querySelector('#countSeconds').innerText = 0;
}