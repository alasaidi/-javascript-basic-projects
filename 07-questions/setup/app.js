//using selectors inside the element
//select all the question section
const questions = document.querySelectorAll(".question");
questions.forEach((question) => {
   //for each question section we gonna select the btn whish was clicked

  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", () => {
    //we gonna loop in the other questions to see if they are open or not 
    questions.forEach((item) => {
        //if the item is open but is not the one we clicked on 
      if (item !== question) {
        //we gonna remove the class of show text 
        item.classList.remove("show-text");
      }
    });
//to toggle the class list to open and close the question
    question.classList.toggle("show-text");
  });
});

// traversing the dom
// const btns=document.querySelectorAll('.question-btn');
// btns.forEach((btn)=>{
//     btn.addEventListener('click',(e)=>{
// const target=e.currentTarget.parentElement.parentElement;
// console.log(target.classList);
// target.classList.toggle('show-text');
//     })
// })
