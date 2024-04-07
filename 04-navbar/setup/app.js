// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const link=document.querySelector('.links');
const btn=document.querySelector('.nav-toggle');

btn.addEventListener('click', ()=>{
    // here what we did with the toggle is to check if the classlist contains the class show-links if yes remove it if false add it 
   link.classList.toggle('show-links');
})