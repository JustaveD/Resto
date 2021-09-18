// Toggle bars in header responsive
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = ()=>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}
window.onscroll = ()=>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

// Search form apperence animation
let searchIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('#search-form');
let searchClose = document.querySelector('#close');
searchIcon.onclick = () =>{
  searchForm.classList.add('active');
}
searchClose.onclick = () =>{
  searchForm.classList.remove('active');
}