let nextButton = document.querySelector(".buttuns .next");
let prevsButton = document.querySelector(".buttuns .prevs"); 
let imgSlider = document.querySelector(".galerry"); 
let allImages = document.querySelectorAll(".galerry img");
let currentImage = document.querySelector("current-imege"); 
let totalImage = document.querySelector(".tital-image");


// Sign The Total Number Of The Images In The Galery
 
let allSpans = document.querySelectorAll(".current-number span"); 
let totalImageNumber = parseInt(totalImage.innerHTML);  
if (!isNaN(totalImageNumber)) {
    allSpans.forEach((span, index) => {
        span.setAttribute("data-index", index + 1); 
        totalImageNumber++; 
        span.innerHTML = index + 1;
    })
} else {
    console.log("EROOR"); 
}
totalImage.innerHTML = totalImageNumber; 
console.log(totalImageNumber); 
// Check The Slected Span Function ' ;
let counterIndexSpan = 0; 
function CheckSpan() {
    allSpans.forEach((span, index) => {
        if(span.classList.className === 'active')  {
            counterIndexSpan = index + 1; 
        }
        if (span.className === 'active') 
        {
            if (index === 0) {
                // Deapbel The Previous Button  
            prevsButton.classList.add("disabled"); 
            }
        } else {
            if (span.className === 'active') {
                    if (index === totalImageNumber - 1) {
                // Disable The Next Button  
                nextButton.classList.add("disabled");
            }
            }
        }
    })
}
CheckSpan();
allImages.forEach((img, index) => { 
        img.setAttribute("data-index", index + 1);
    nextButton.addEventListener("click", () => {
        img.style.cssText = 'transform : translateX(-210px)';
        if (index !== 0) {
            prevsButton.className.remove("disabled"); 
            allSpans.forEach9((span, spnIndex) => {
                if (spnIndex == index) {
                    span.className.add("active");
                    
                  }
            })
        }
})
    
});
let name = 'Nooosssayer'; 
if (name === 'Nooossayer') {
    console.log("Noooosssayer"); 
} else {
    console.log("Yessssayer");
}


