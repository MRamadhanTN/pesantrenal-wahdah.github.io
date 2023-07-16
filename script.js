// Active navbar
var header = document.getElementById("MyNav");
var btns = header.getElementsByClassName("btn3");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace("active"," ");
  this.className += " active";
  });
}

// QnA
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("act-co");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// Top button
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Countdown Timer
var countDownDate = new Date("Jul 18, 2023 00:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

// Sticky Navbar
var nav = document.querySelector("nav");
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    btn1.classList.replace("rounded-button","btn");
    btn2.classList.replace("rounded-button", "btn");
    nav.style.padding = "8px 40px";
  } else {
    nav.classList.remove("sticky");
    btn1.classList.replace("btn","rounded-button");
    btn2.classList.replace("btn","rounded-button");
    nav.style.padding = "14px 40px";
  }
});

// Show Hide password
const password = document.getElementById('password');
const showHide = document.getElementById('showHide');

password.type = 'password';
showHide.innerHTML = '<i class="fa-solid fa-eye"></i>';
showHide.style.cursor = 'pointer';
showHide.addEventListener('click', () => {
    if (password.type === 'password' ) {
        password.type = 'text';
        showHide.innerHTML = '<i class="fa-sharp fa-solid fa-eye-slash"></i>';
    } else {
        showHide.innerHTML = '<i class="fa-solid fa-eye"></i>';
        password.type = 'password';
    }
});

// Form chat messages
function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}