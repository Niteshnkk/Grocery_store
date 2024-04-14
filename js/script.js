// document.addEventListener('DOMContentLoaded', () => {
//   const searchForm = document.querySelector('.search-form');
//   const shoppingcart = document.querySelector('.shopping-cart');
//   const loginForm = document.querySelector('.login-form');
//   const navBar = document.querySelector('.navbar');
// });


let searchForm= document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active');
    shoppingcart.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
}
// let searchForm = document.querySelector('.search-form');

// This line selects the first element with the class "search-form" and assigns it to the variable searchForm.
// document.querySelector('#search-btn').onclick = () => { ... }

// This line selects the first element with the ID "search-btn" and sets its onclick event handler to an arrow function.
// searchForm.classList.toggle('active');

// Inside the arrow function, this line toggles the presence of the class "active" on the element referred to by the searchForm variable. If the element has the class "active", it will be removed, and if it doesn't have the class "active", it will be added
// let shoppingcart= document.querySelector('.shoppping-cart');

// document.querySelector('#cart-btn').onclick=()=>{
//     shoppingcart.classList.toggle('active');
// }
let shoppingcart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    shoppingcart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
}
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingcart.classList.remove('active');
    navBar.classList.remove('active');
}
// let navbar = document.querySelector('.navbar');

// document.querySelector('#menu-btn').onclick = () => {
//     navbar.classList.toggle('active');
// }
let navBar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navBar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingcart.classList.remove('active');
    loginForm.classList.remove('active');
 
}

window.onscroll =() =>{
 searchForm.classList.remove('active');
 shoppingcart.classList.remove('active');
 loginForm.classList.remove('active');
 navBar.classList.remove('active');
}
var swiper = new Swiper(".products-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
  autoplay:{
    delay: 7500,
    disableOnInteraction : false ,
  },
  centerdSlides : true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });
  var swiper = new Swiper(".review-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
  autoplay:{
    delay: 7500,
    disableOnInteraction : false ,
  },
  centerdSlides : true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });


