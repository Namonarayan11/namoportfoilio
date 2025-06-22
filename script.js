let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.oneclick = ()=> {
    menuIcon.oneclick.toggle('bx-x');
    navbar.classList.toggle('active');

}

