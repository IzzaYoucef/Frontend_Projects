const inputBox = document.getElementById("search"); 
const myBtn = document.querySelector("button");
const mainContainer =  document.querySelector(".container"); 

function addToLocalStorege(element) {
    window.localStorage.setItem("Task", element); 
}
function getInLocalStorage( reciver , element) {
    reciver = window.localStorage.getItem(element);
}

myBtn.addEventListener("click", function () {
     window.onload = function() {
         inputBox.onfocus();  // Automatically focuses the input box when the window loads 
         if (window.localStorage !== "") {
             let myP = document.createTextNode(window.localStorage.getItem("Task")); 
        }
    }
    if (inputBox.value === "") {
       let erorMessage = document.querySelector(".container p.eror");
       erorMessage.style.display = "block"
    } else {
          let erorMessage = document.querySelector(".container p.eror");
        erorMessage.style.display = "none";
        let myText = document.createTextNode(inputBox.value);
        let myP = document.createElement("span");
        myP.appendChild(myText);
        const newInput = document.createElement("input");
        newInput.setAttribute("type", "radio");
        let newDiv = document.createElement("div");
        newDiv.appendChild(newInput);
        newDiv.appendChild(myP);
            // Local Part  
        addToLocalStorege(myP.innerHTML);
            mainContainer.appendChild(newDiv); 
            newDiv.style.cssText = "padding:10px"; 
        myP.style.cssText = "margin-left : 10px"; 
        inputBox.value = "";  
        
        newInput.addEventListener("click", function () {
            myP.style.textDecoration = "line-through"; 
        })
    }
    
});
function saveData() {
    let paragraphe = document.createTextNode(localStorage.getItem("Task"));
    mainContainer.appendChild(paragraphe);
}
saveData();
