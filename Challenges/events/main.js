// Counting Clicks
const myButton = document.getElementById('myButton');
const clickCount = document.getElementById('clickCount');
const deactivate = document.getElementById('deactivate');

let count = 0; // set initial count. The count variable will be used as storage for the count number of times..


myButton.addEventListener('click', event => {
    count++;
    clickCount.textContent = count;
});

deactivate.addEventListener('click', event => {
    count = 0;
    clickCount.textContent = count;
});





// Changing colors
const divs = document.querySelectorAll('div');

document.addEventListener('keydown', event => {
    divs.forEach(div => {
        const userKey = event.key;
        switch(userKey.toUpperCase()) {
            case 'R':
                div.style.backgroundColor = 'red';
                break;
            case 'Y':
                div.style.backgroundColor = 'yellow';
                break;
            case 'G':
                div.style.backgroundColor = 'green';
                break;
            case 'B':
                div.style.backgroundColor = 'blue';
                break;
        };
    });
});





// A dessert list
const desserts = document.getElementById('desserts');
const addButton = document.getElementById('addButton');

addButton.addEventListener('click', event => {
    const userChoice = prompt('Please enter your favourite dessert: ', '');
    const li = document.createElement('li');
    li.textContent = userChoice;
    desserts.appendChild(li);

    li.addEventListener('click', event => {
        event.stopPropagation();
        const newUserChoice = prompt('Enter your new choice: ', '');
        li.textContent = newUserChoice;
    })
});






// Interactive quiz

// List of questions (statement + answer)
const questions = [
    {
      statement: "2+2?",
      answer: "2+2 = 4"
    },
    {
      statement: "In which year did Christopher Columbus discover America?",
      answer: "1492"
    },
    {
      statement:
        "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
      answer: "The E letter"
    }
];

const content = document.getElementById('content');

questions.forEach((question, index) => {
    const contentWrapper = document.createElement('div');
    const questionElement = document.createElement('p');
    const answerElement = document.createElement('span');
    const showanswerButton = document.createElement('button');

    questionElement.innerHTML = `<strong>Question ${index + 1}:</strong> ${question.statement}`;
    showanswerButton.textContent = 'Show answer';


    showanswerButton.addEventListener('click', event => {
        contentWrapper.removeChild(showanswerButton);
        answerElement.textContent = question.answer;
        contentWrapper.appendChild(answerElement);
    })

    answerElement.addEventListener('click', event => { // Bonus trick when the user clicks the answer, the answer is hidden again...
        contentWrapper.removeChild(answerElement);
        showanswerButton.textContent = 'Show answer';
        contentWrapper.appendChild(showanswerButton);
    })

    contentWrapper.appendChild(questionElement);
    contentWrapper.appendChild(showanswerButton);

    content.appendChild(contentWrapper);
})

