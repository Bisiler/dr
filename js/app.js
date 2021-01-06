const countdown = document.querySelector('.countdown');
const launchDate = new Date('jan 28, 2021 00:00:01');

const interval = setInterval(()=>{
const now = new Date().getTime();
const timeLeft = launchDate - now;

const days = Math.floor(timeLeft/(1000*60*60*24));
const hours = Math.floor(timeLeft % (1000*60*60*24)/(1000*60*60));
const minutes = Math.floor(timeLeft % (1000*60*60)/ (1000*60));
const seconds = Math.floor(timeLeft % (1000*60)/1000);


countdown.innerHTML = `
        <div><span> ${days} päeva</span></div>
        <div><span> ${hours} tundi</span></div>
        <div><span> ${minutes} minutit</span></div>
        <div><span> ${seconds} sekundit</span></div>    
    `;


console.log(seconds);


}, 1000);

