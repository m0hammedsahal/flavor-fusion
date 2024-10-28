document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
  
    window.addEventListener('scroll', function() {
      let scrollPosition = window.scrollY + window.innerHeight;
  
      cards.forEach(function(card) {
        let cardPosition = card.offsetTop;
        if (scrollPosition > cardPosition) {
          card.classList.add('active');
        }
      });
    });
  });






  function myFunction() {
    const element = document.body;
    element.classList.toggle("dark-mode");
}



  


  var today=new Date()
var dd=today.getDate()
var mm=today.getMonth()
var year=today.getFullYear()
var hour=today.getHours()
var second=today.getSeconds()
var minute=today.getMinutes()

if(dd<10){
    dd="0"+dd
}
if(mm<10){
    mm="0"+mm 
}
if(year<10){
    year="0"+year 
}
if(hour<10){
    hour="0"+hour
}
if(minute<10){
    minute="0"+minute
}
if(second<10){+hour+"/"+minute+"/"+second
    second="0"+second
}
document.getElementById("demo").innerText=dd+"/"+mm+"/"+year
document.getElementById("demo2").innerText=hour+"/"+minute+"/"+second