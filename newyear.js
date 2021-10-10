
const daysEl= document.getElementById('days');

const hoursEl= document.getElementById('hours');
const minsEl= document.getElementById('minutes');
const secondsEl= document.getElementById('seconds');


const newYears ='1 january 2022 00:00:00';

 function countdown(){
     const newYearsDate= new Date(newYears);
     const currentDate= new Date();
 
     const totalseconds=(newYearsDate - currentDate) /1000;
     
     const days = Math.floor(totalseconds / 3600 /24);
     const hours = Math.floor(totalseconds/3600)%24;
     const mins = Math.floor(totalseconds/60)%60;

     const secs =Math.floor(totalseconds )%60;
     
        daysEl.innerHTML = days;
        hoursEl.innerHTML=hours;
        minsEl.innerHTML=mins;
        secondsEl.innerHTML=secs;

        

     
 }
 countdown();

//set coutdown every seconds
setInterval(countdown,1000);