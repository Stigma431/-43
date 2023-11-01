let containerburger = document.querySelector('.container-burger');
let burgerlist = document.querySelector('.burger-list');
let topline = document.querySelector('.top-line');
let middleline = document.querySelector('.middle-line');
let underline = document.querySelector('.under-line');

containerburger.addEventListener('click', function() {
    burgerlist.classList.toggle('deactive');

    topline.classList.toggle('rotate');
    middleline.classList.toggle('scale');
    underline.classList.toggle('rotate-minus');
});

