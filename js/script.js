// menu-btn
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    carItem.classList.remove('active');
}

// search

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    carItem.classList.remove('active');
}

// cart-btn

let carItem = document.querySelector('.cart-item-container');

document.querySelector('#cart-btn').onclick = () =>{
    carItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}


window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    carItem.classList.remove('active');
}