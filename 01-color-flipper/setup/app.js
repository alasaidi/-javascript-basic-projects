const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener('click',()=>{
    //get a random number from the array
    const randomNumber=getRandomNumber();
    document.body.style.backgroundColor= colors[randomNumber];
    // textContent to change the text in the span in html
    color.textContent=colors[randomNumber];
})

const getRandomNumber=()=>{
    //floor gonna give u an integer Number;
    //random gonna give u a number between 0--1 but never will be one 
    return Math.floor(Math.random()*colors.length);
}