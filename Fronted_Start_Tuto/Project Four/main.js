let passWordBox = document.getElementById("pwd");

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
let lowerCase = "abcdefghijklmnopqrstuvwxyz"; 
let numbers = "1234567890";
let specialCracters = "!@#$%^&*()_-=+/?.,|``><{}[]"; 
let allChars = upperCase + lowerCase + numbers + specialCracters; 

let passwordLength = 15; 

function generatePwd() {
    let password = ''; 
password += upperCase[Math.floor(Math.random() * upperCase.length)]; 
password += upperCase[Math.floor(Math.random() * lowerCase.length)]; 
password += upperCase[Math.floor(Math.random() * numbers.length)]; 
password += upperCase[Math.floor(Math.random() * specialCracters.length)]; 


while (password.length <= passwordLength) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passWordBox.value = password; 
}
let button = document.querySelector("#btn button");
console.log(button);
button.addEventListener("click", () => {
    generatePwd();
}); 

let copyIcon = document.querySelector(".fa-regular"); 
copyIcon.addEventListener("click", () => {
    passWordBox.select();
    document.execCommand('copy');
})
