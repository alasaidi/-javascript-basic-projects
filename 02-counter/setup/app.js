let count=0;
const value=document.querySelector('#value');
const btns =document.querySelectorAll('.btn');
// foreach is working to select element by element of an array
//you can enter three element in the foreach (a= whish gonna give you each element of the array ,b= the index of that element selected ,b=the array itself)
btns.forEach((btn)=>{
//Sometimes in the event handler there is an “e” or “evt” or “event” in the function parameter. This is also known as the event object and contains all the information about the event itself.
btn.addEventListener('click',(e)=>{
const styles=e.currentTarget.classList;
console.log(styles);
if(styles.contains("decrease")){
    count--;}else
    if(styles.contains("increase")){
        count++;
    }else{
        count=0
    }

    value.textContent=count;
})

})

