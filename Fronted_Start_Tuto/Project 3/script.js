let Questions = [
    {
        quest: "Achal Ites3it Isordiyen?", 
        answers: [
            {title: '30000Da', correct: false},
            {title: 'Ulach', correct: false},
            {title: '40000Da', correct: false},
            {title: '50000Da', correct: true},
        ]
    }, 
    {
        quest: "Quell est Le Meilleur Moyenne De Comunication?", 
        answers: [
            {title: 'La Lange', correct: true},
            {title: 'Le Transport', correct: false},
            {title: 'L\'humain', correct: false},
            {title: 'Le PC', correct: false},
        ]
    }, 
    {
        quest: "What Is The Biggest Country In The World?", 
        answers: [
            {title: 'Canada', correct: false},
            {title: 'USA', correct: false},
            {title: 'China', correct: false},
            {title: 'Russia', correct: true},
        ]
    }, 
    {
        quest: "What Is The Fabricator Of Ryzen CPU?", 
        answers: [
            {title: 'Intel', correct: false},
            {title: 'Apple', correct: false},
            {title: 'Amd', correct: true},
            {title: 'Toyota', correct: false},
        ]
    },
];

// Get The Elements From DOM
let container = document.querySelector(".container");
let question = document.querySelector("#quesion h3"); 
let buttons = document.querySelectorAll(".answers button"); 
let nextButton = document.querySelector(".move-next button"); 

let myElement = document.createElement('h4'); 

// Counter for Questions
let counter = 0;
let score = 0;

// Update Question Function
function updateQuestion() {
    nextButton.innerHTML = 'Next'; 
    if (counter < Questions.length) {
        question.innerHTML = Questions[counter].quest;

        // Update Answers
        buttons.forEach((button, index) => {
            button.innerHTML = Questions[counter].answers[index].title;
            button.style.display = 'inline'; // Ensure buttons are displayed
            button.style.backgroundColor = ''; // Reset background color
            button.style.olor = ''; // Reset text color
            button.disabled = false; // Enable buttons
        }); 

        nextButton.style.display = 'none'; // Hide the next button until an answer is clicked
    } 
}

// Handle Next Button Click
nextButton.addEventListener("click", () => {
    if (nextButton.innerHTML === 'Restart Quiz') {
        // Restart the quiz
        counter = 0;
        updateScore();
        myElement.textContent = ''; // Clear the old score
        updateQuestion();
    } else {
        counter++;
        if (counter >= Questions.length) {
            question.innerHTML = 'Quiz Over'; 
            buttons.forEach(button => button.style.display = 'none');
            nextButton.innerHTML = 'Restart Quiz'; 
            nextButton.style.display = 'inline';
            
            // Show The Score
            localStorage.setItem('score', `Your Score Is ${score}/${Questions.length}`); 
            myElement.textContent = localStorage.getItem('score'); // Set the new score
            container.appendChild(myElement);
        } else {
            updateQuestion();
        }
    }
});

// Show the nextButton when an answer is clicked
buttons.forEach((button, buttonIndex) => {
    button.addEventListener("click", () => {
        nextButton.style.display = 'inline';
        checkAnswer(Questions[counter].answers[buttonIndex].correct, button);
        if (Questions[counter].answers[buttonIndex].correct) {
            score++;
        }
        // Show The Correct Answer
        buttons.forEach((b, index) => {
            b.disabled = true; // Disable buttons after an answer is selected
            if (Questions[counter].answers[index].correct) {
                b.style.backgroundColor = 'rgb(135, 224, 135)'; // Highlight the correct answer
                b.style.color = '#fff';
            }
        });
    });
});

// Initialize the first question
updateQuestion();

// Check If The Answer Is True Or False
function checkAnswer(isCorrect, button) {
    if (isCorrect) {
        button.style.cssText = 'background-color: rgb(135, 224, 135); color: #fff;'; 
    } else {
        button.style.cssText = 'background-color: red; color: #fff;'; 
    }
}

// Reset the score
function updateScore() {
    score = 0; 
}

NewObject[
    {
    Ques: "Say Helo world", 
    answesr :[
            {
        title : "3000", bool: flase 
        }, 
    {
        title: "0303", bool: true 
        }
        ]
    }
]
console.log(console.error(nextButton));
