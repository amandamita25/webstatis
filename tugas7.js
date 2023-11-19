//pemberitahuan 
alert('Welcome to My Website')

// sidebar
const menu = document.querySelector('.navbar #menu');
const nav = document.querySelector('.navbar .navbar-nav');

menu.addEventListener('click', function() {
    nav.classList.toggle('active')
});

const toggleSidebar =document.querySelector("#toggle-sidebar");
const sidebar= document.querySelector(".sidebar");

toggleSidebar.addEventListener("click",()=>{
    sidebar.classList.toggle("sidebar-open");
});