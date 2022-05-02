let isim = prompt("Lütfen Adınızı Giriniz: ")


let Name = document.querySelector("#Name")

Name.innerHTML=`${isim}`

function time(){
let today = new Date();

let hour =today.getHours(); 
if (hour<10) hour="0"+hour

let minute =today.getMinutes(); 
if (minute<10) minute="0"+minute

let second =today.getSeconds(); 
if (second<10) second="0"+second

const days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
let day = days[today.getDay()];

let myClock = document.querySelector("#myClock")

myClock.innerHTML=`${hour}.${minute}.${second} ${day}`

}

setInterval(time,100);





