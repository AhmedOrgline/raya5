let btn_menu = document.querySelector(".btn-menu");
let header   = document.querySelector("header");
let links    = document.querySelector(".links ul");
let list     = document.querySelector(".links ul li");
let cards    = document.querySelectorAll(".cards .card");
let NewCards    = document.querySelectorAll(".container_box .box_card");

/* document.addEventListener('click' , function(e){
    e.preventDefault()
}) */

btn_menu.addEventListener('click' , function(){
    btn_menu.classList.toggle("open");
    if(btn_menu.getAttribute("class") === "btn-menu open"){
        links.style.cssText= "transform:scale(1,1)translateY(0px)";
    }
    else{
        links.style.cssText= "transform:scale(0,0)translateY(200px)";
    }
})

let countScroll = 0;
window.onscroll = function(){
    if(countScroll < window.scrollY){
        countScroll = window.scrollY;
        header.style.cssText = "transition-delay: 1s;top : -100% ";
    }else{
        countScroll = window.scrollY;
        header.style.cssText = "transition-delay: 0s;top : 0";
    }
}

cards.forEach(function(ele , index , arr){
    ele.children[0].children[0].addEventListener('click' , function(){
        this.classList.toggle('active');
        if(this.getAttribute("class") === "icon active"){
            ele.children[0].children[0].children[0].style.cssText = "color : red";
            ele.children[0].children[0].children[0].setAttribute("class" , "fa-solid fa-heart");
        }
        else{
            ele.children[0].children[0].children[0].style.cssText = "color : #222";
            ele.children[0].children[0].children[0].setAttribute("class" , "fa-regular fa-heart");
        }
    })
});

NewCards.forEach(function(ele , index , arr){
    ele.children[0].children[0].addEventListener('click' , function(){
        this.classList.toggle('active');
        if(this.getAttribute("class") === "icon active"){
            ele.children[0].children[0].children[0].style.cssText = "color : red";
            ele.children[0].children[0].children[0].setAttribute("class" , "fa-solid fa-heart");
        }
        else{
            ele.children[0].children[0].children[0].style.cssText = "color : #222";
            ele.children[0].children[0].children[0].setAttribute("class" , "fa-regular fa-heart");
        }
    })
});

/* ================ the new files ============= */
window.onload = function(){
    NewCards.forEach(function(ele,index,array){
        ele.style.opacity = '1';
    })
}

let price = [];
let name = [];
NewCards.forEach((e,i) => {
    e.style.cssText =`--delay: ${i} ; transition-delay : calc(var(--delay)*0.1s)`;
    name.push(e.children[1].children[1].children[1].innerHTML);
    price.push(Number(e.children[2].children[0].children[0].children[0].innerHTML.split(",").join("")))
    
});
name.sort()
price.sort(function(e,a){return e - a})



let selection = document.querySelector("#sorting");
selection.addEventListener('change' , function(){
    let value = selection.value;
    type_of_selection_sort(value);
})
function type_of_selection_sort(value){
    let = order = 0;
    if(value === "price"){
        for (let i = 0; i < price.length; i++) {
            let select = price[i];
            for (let j = 0; j < price.length; j++) {
                let currentSelect = Number(NewCards[j].children[2].children[0].children[0].children[0].innerHTML.split(",").join(""));
                if(currentSelect === select){
                    NewCards[j].style.cssText = `order : ${order}`;
                    order++;
                }
            }
        }
    }
    else if(value === "name"){
        for (let i = 0; i < name.length; i++) {
            let select = name[i];
            for (let j = 0; j < name.length; j++) {
                let currentSelect = NewCards[j].children[1].children[1].children[1].innerHTML;
                if(currentSelect === select){
                    NewCards[j].style.cssText = `order : ${order}`;
                    order++;
                }
            }
        }
    }
    NewCards.forEach(function(ele,index,array){ ele.style.opacity = '1'})
}

