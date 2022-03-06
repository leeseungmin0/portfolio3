'use strict'
//home
let container = document.querySelector('.container')
let homeContainer = document.querySelector('.home__container')
let slide = document.querySelectorAll('.home__slide');
let count = slide.length;
let currentIdx = 0;
let leftBtn = document.querySelector('.left__btn')
let rightBtn = document.querySelector('.right__btn')
let picInterval=undefined;
//search
let searchInput = document.querySelector('.search__input');
let searchIcon = document.querySelector('.search__i');
let searchshow = true;


// 동근란 버튼

let page = document.querySelectorAll(".page span");
let pageCount = page.length;


searchIcon.addEventListener('click',()=>{
    if(searchshow){
        searchInput.classList.add('show')
        searchshow= !searchshow
    }
    else {
        searchInput.classList.remove('show')
        searchshow= !searchshow
    }
    
})



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

function autoSlide(){
    picInterval= setInterval(()=>{
        let nextIdx = (currentIdx+1)%count;
        moveSlide(nextIdx)
        
    },4000)
}

container.addEventListener('mouseenter',()=>{
    clearInterval(picInterval)
})
container.addEventListener('mouseleave',()=>{
    autoSlide();
})


// page
for(let i=0; i<pageCount; i++){
    page[i].addEventListener('click',(e)=>{
        moveSlide(i)
        if(e.target === page[i]) e.target.classList.add('active');
        else e.target.classList.remove('active');
        
        
    })
}

