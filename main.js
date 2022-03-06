'use strict'

let container = document.querySelector('.container')
let homeContainer = document.querySelector('.home__container')
let slide = document.querySelectorAll('.home__slide');
let count = slide.length;
let currentIdx = 0;
let leftBtn = document.querySelector('.left__btn')
let rightBtn = document.querySelector('.right__btn')
for(let i=0; i<count; i++){
    slide[i].style.left = i*100 +"%"
    
}
function moveSlide(num){
    homeContainer.style.left = -100 * num +"%";
    currentIdx= num
}

leftBtn.addEventListener('click',()=>{
    if(currentIdx===0) moveSlide(count-1)
    else moveSlide(currentIdx-1);
    
})
rightBtn.addEventListener('click',()=>{
    
    if(currentIdx===count-1) moveSlide(0) 
    else moveSlide(currentIdx+1); 

    
})

setInterval(()=>{
    let nextIdx = (currentIdx+1)%count;
    moveSlide(nextIdx)
},4000)


