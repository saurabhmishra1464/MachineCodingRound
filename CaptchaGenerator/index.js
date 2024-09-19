

(function(){
  generateCaptch();
})();

function onSubmit(){
    debugger
    let inputId = document.getElementById('inputId');
    let showText =  document.getElementById('showText');
    let yu = inputId.value;
    let captcha = document.getElementById('captcha');
    if(inputId.value === captcha.textContent){
       showText.innerHTML = "Matched";
    }
    else{
        showText.innerHTML = "Not Matched";
    }
    generateCaptch();
}

function generateCaptch(){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const captachaLength = 5;
    let captacha = "";
    for(let i = 0;i<captachaLength;i++){
        captacha = characters.charAt(Math.floor(Math.random()* characters.length))+captacha;
    }
    let captachaDiv = document.getElementById('captcha');
    captachaDiv.innerHTML = captacha;
}