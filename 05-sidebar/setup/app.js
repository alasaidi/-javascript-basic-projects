// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const openBtn=document.querySelector('.sidebar-toggle');
const closeBtn=document.querySelector('.close-btn')
const sidebar=document.querySelector('.sidebar')

openBtn.addEventListener('click',()=>{
    console.log(sidebar.classList);
    sidebar.classList.toggle('show-sidebar')
})

closeBtn.addEventListener('click',()=>{
    console.log(sidebar.classList);
    sidebar.classList.toggle('show-sidebar')
})