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