console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('songs/Song1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let item1 = document.getElementById('item1');
let item2 = document.querySelector('#item2');
let bottom = document.querySelector('.bottom')
let preview = document.querySelector('.preview');

item1.addEventListener('click', ()=> {
    // console.log('play');
    if(audioElement.paused || audioElement.currentTime <= 0) { 
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
})

masterPlay.addEventListener('click', () => {
    // console.log('play');
    if(audioElement.paused || audioElement.currentTime <= 0) { 
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }else {
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

item2.addEventListener('click', () => {
    console.log('item clicked');
    bottom.style.display = "none";
    preview.style.display = "flex";
})