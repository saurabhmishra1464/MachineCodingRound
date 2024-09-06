
let signup = document.querySelector(".signup");
let slider = document.querySelector("slider");
let formSection = document.querySelector("form-section");


signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});