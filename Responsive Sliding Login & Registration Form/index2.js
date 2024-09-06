

let signupbtn = document.querySelector('.signup');
let slider = document.querySelector('.slider');
let loginbtn = document.querySelector('.login');
let formSection = document.querySelector('.form-section');

signupbtn.addEventListener("click",()=>{
slider.classList.add('moveslider');
formSection.classList.add('form-section-move');
});

loginbtn.addEventListener("click", ()=>{
slider.classList.remove('moveslider');
formSection.classList.remove('form-section-move');
});
