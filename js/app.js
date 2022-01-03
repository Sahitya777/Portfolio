let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let nav = document.querySelector('.mobile-nav');

hamberger.addEventListener('click',function(){
    nav.classList.add('open');
});
times.addEventListener('click',function(){
    nav.classList.remove('open');
});