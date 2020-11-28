// Start quiz button functionality
var startQuiz = document.querySelector('#start-quiz');
startQuiz.addEventListener('click', firstQuestion);

// Global variables
var secondsLeft = 76;
var time = document.createElement('h5');
var header = document.querySelector('header');
var main = document.querySelector('main');

/* -- > Creates timer <-- */
function timerBegin() {
    var timerInterval = setInterval(function () {
      secondsLeft--;
      
      time.textContent = "Timer: " + secondsLeft;
      header.appendChild(time);
        // header.setAttribute('style', 'margin-top: 0;');
  
  
      if (secondsLeft === 0) {
        clearInterval(timerInterval);
      } 
    }, 1000);
  }


/* --> Correct answer <-- */
function correctAnswer() {
  var rectangle = document.createElement('div');
  main.appendChild(rectangle);
  rectangle.setAttribute('style', 'margin: 80px');
  var line = document.createElement('hr');
  rectangle.appendChild(line);
  var rightAnswer = document.createElement('p');
  rightAnswer.setAttribute('style', 'font-style: italic');
  rightAnswer.textContent = 'Correct Answer!'
  main.appendChild(rightAnswer);
}



/* --> Incorrect answer <-- */
function incorrectAnswer() {
  // secondsLeft = secondsLeft - 10;
  var rectangle = document.createElement('div');
  main.appendChild(rectangle);
  rectangle.setAttribute('style', 'margin: 80px');
  var line = document.createElement('hr');
  rectangle.appendChild(line);
  var wrongAnswer = document.createElement('p');
  wrongAnswer.setAttribute('style', 'font-style: italic;');
  wrongAnswer.textContent = 'Wrong Answer!'
  main.appendChild(wrongAnswer);
}




/* --> First question <-- */
function firstQuestion (event) {
    timerBegin();
    event.preventDefault();

  // Clear main content
    main.textContent = '';

    // Create box to contain question and answers
    var boxEl = document.createElement('div');
    main.appendChild(boxEl);

    // Create question and append them to the box 
    var question1El = document.createElement('h2');
    question1El.textContent = 'Commonly used data types DO NOT include: ';
    boxEl.appendChild(question1El);

    // Create an ordered list for the answers and append the list items to the ol
    var answers = document.createElement('ol');
    main.appendChild(answers);
    answers.setAttribute('style', 'list-style-type: none');
    var li1 = document.createElement('li');
    var li2 = document.createElement('li');
    var li3 = document.createElement('li');
    var li4 = document.createElement('li');
    answers.appendChild(li1);
    answers.appendChild(li2);
    answers.appendChild(li3);
    answers.appendChild(li4);

    // Set text content of answers and make them buttons, then append them to the li's
    var a = document.createElement('button');
    var b = document.createElement('button');
    var c = document.createElement('button');
    var d = document.createElement('button');
    a.textContent = 'A. strings';
    b.textContent = 'B. booleans';
    c.textContent = 'C. alerts';
    d.textContent = 'D. numbers';
    li1.appendChild(a);
    li2.appendChild(b);
    li3.appendChild(c);
    li4.appendChild(d);

    // Set classes for correct answer
    c.setAttribute('class', 'right-answer');

    // Set classes for incorrect answers
    a.setAttribute('class', 'wrong-answer');
    b.setAttribute('class', 'wrong-answer');
    d.setAttribute('class', 'wrong-answer');


    // Create event listener to call right answer when clicked
    document.querySelector('.right-answer').addEventListener('click', correctAnswer);

    // Create event listener to call wrong answer when clicked
    document.querySelector('.wrong-answer').addEventListener('click', incorrectAnswer);

    // Call the function for the second question no matter which answer is clicked
    document.querySelector('.right-answer').addEventListener('click', secondQuestion);

    document.querySelector('.wrong-answer').addEventListener('click', secondQuestion);
    
}


/* --> Second question <-- */
function secondQuestion (event) {
  event.preventDefault();

  // Clear main content
  main.textContent = '';

  // Create box to contain question and answers
  var boxEl = document.createElement('div');
  main.appendChild(boxEl);

  // Create question and append them to the box 
  var question1El = document.createElement('h2');
  question1El.textContent = 'The condition in an if/else statment is enclosed within _______.';
  boxEl.appendChild(question1El);

  // Create an ordered list for the answers and append the list items to the ol
  var answers = document.createElement('ol');
  main.appendChild(answers);
  answers.setAttribute('style', 'list-style-type: none');
  var li1 = document.createElement('li');
  var li2 = document.createElement('li');
  var li3 = document.createElement('li');
  var li4 = document.createElement('li');
  answers.appendChild(li1);
  answers.appendChild(li2);
  answers.appendChild(li3);
  answers.appendChild(li4);

  // Set text content of answers and make them buttons, then append them to the li's
  var a = document.createElement('button');
  var b = document.createElement('button');
  var c = document.createElement('button');
  var d = document.createElement('button');
  a.textContent = 'A. quotes';
  b.textContent = 'B. curly brackets';
  c.textContent = 'C. parentheses';
  d.textContent = 'D. square brakets';
  li1.appendChild(a);
  li2.appendChild(b);
  li3.appendChild(c);
  li4.appendChild(d);

  // Set classes for correct answer
  c.setAttribute('class', 'right-answer');

  // Set classes for incorrect answers
  a.setAttribute('class', 'wrong-answer');
  b.setAttribute('class', 'wrong-answer');
  d.setAttribute('class', 'wrong-answer');


  // Create event listener to call right answer when clicked
  document.querySelector('.right-answer').addEventListener('click', correctAnswer);

  // Create event listener to call wrong answer when clicked
  document.querySelector('.wrong-answer').addEventListener('click', incorrectAnswer);

  // Call the Function for the third question regardless of the answer
  document.querySelector('.right-answer').addEventListener('click', thirdQuestion);

  document.querySelector('.wrong-answer').addEventListener('click', thirdQuestion);
}

/* --> Third question <-- */
function thirdQuestion (event) {
  event.preventDefault();

  // Clear main content
  main.textContent = '';

  // Create box to contain question and answers
  var boxEl = document.createElement('div');
  main.appendChild(boxEl);

  // Create question and append them to the box 
  var question1El = document.createElement('h2');
  question1El.textContent = 'Arrays in JavaScript can be used to store _______.';
  boxEl.appendChild(question1El);

  // Create an ordered list for the answers and appends the list items to the ol
  var answers = document.createElement('ol');
  main.appendChild(answers);
  answers.setAttribute('style', 'list-style-type: none');
  var li1 = document.createElement('li');
  var li2 = document.createElement('li');
  var li3 = document.createElement('li');
  var li4 = document.createElement('li');
  answers.appendChild(li1);
  answers.appendChild(li2);
  answers.appendChild(li3);
  answers.appendChild(li4);

  // Set text content of answers and make them buttons, then append them to the li's
  var a = document.createElement('button');
  var b = document.createElement('button');
  var c = document.createElement('button');
  var d = document.createElement('button');
  a.textContent = 'A. numbers and strings';
  b.textContent = 'B. other arrays';
  c.textContent = 'C. booleans';
  d.textContent = 'D. all of the above';
  li1.appendChild(a);
  li2.appendChild(b);
  li3.appendChild(c);
  li4.appendChild(d);

  // Set classes for correct answer
  d.setAttribute('class', 'right-answer');

  // Set classes for incorrect answers
  a.setAttribute('class', 'wrong-answer');
  b.setAttribute('class', 'wrong-answer');
  c.setAttribute('class', 'wrong-answer');


  // Create event listener to call right answer when clicked
  document.querySelector('.right-answer').addEventListener('click', correctAnswer);

  // Create event listener to call wrong answer when clicked
  document.querySelector('.wrong-answer').addEventListener('click', incorrectAnswer);

  // Call the Function for the third question
  document.querySelector('.right-answer').addEventListener('click', fourthQuestion);

  document.querySelector('.wrong-answer').addEventListener('click', fourthQuestion);
}

/* --> Fourth question <-- */
function fourthQuestion (event) {
  event.preventDefault();

  // Clear main
  main.textContent = '';

  // Create box to contain question and answers
  var boxEl = document.createElement('div');
  main.appendChild(boxEl);

  // Create question and append them to the box 
  var question1El = document.createElement('h2');
  question1El.textContent = 'String values must be enclosed withing _____ when being assigned to variables.';
  boxEl.appendChild(question1El);

  // Create an ordered list for the answers and appends the list items to the ol
  var answers = document.createElement('ol');
  main.appendChild(answers);
  answers.setAttribute('style', 'list-style-type: none');
  var li1 = document.createElement('li');
  var li2 = document.createElement('li');
  var li3 = document.createElement('li');
  var li4 = document.createElement('li');
  answers.appendChild(li1);
  answers.appendChild(li2);
  answers.appendChild(li3);
  answers.appendChild(li4);

  // Set text content of answers and make them buttons, then append them to the li's
  var a = document.createElement('button');
  var b = document.createElement('button');
  var c = document.createElement('button');
  var d = document.createElement('button');
  a.textContent = 'A. commas';
  b.textContent = 'B. quotes';
  c.textContent = 'C. curly brackets';
  d.textContent = 'D. parentheses';
  li1.appendChild(a);
  li2.appendChild(b);
  li3.appendChild(c);
  li4.appendChild(d);

  // Set classes for correct answer
  b.setAttribute('class', 'right-answer');

  // Set classes for incorrect answers
  a.setAttribute('class', 'wrong-answer');
  c.setAttribute('class', 'wrong-answer');
  d.setAttribute('class', 'wrong-answer');


  // Create event listener to call right answer when clicked
  document.querySelector('.right-answer').addEventListener('click', correctAnswer);

  // Create event listener to call wrong answer when clicked
  document.querySelector('.wrong-answer').addEventListener('click', incorrectAnswer);

  // Call the Function for the third question
  document.querySelector('.right-answer').addEventListener('click', fifthQuestion);

  document.querySelector('.wrong-answer').addEventListener('click', fifthQuestion);
}

/* --> Fifth question <-- */
function fifthQuestion (event) {
  event.preventDefault();

  // Clear main
  main.textContent = '';

  // Create box to contain question and answers
  var boxEl = document.createElement('div');
  main.appendChild(boxEl);

  // Create question and append them to the box 
  var question1El = document.createElement('h2');
  question1El.textContent = 'A very useful tool used during development and debugging for printing content to the debugger is: ';
  boxEl.appendChild(question1El);

  // Create an ordered list for the answers and appends the list items to the ol
  var answers = document.createElement('ol');
  main.appendChild(answers);
  answers.setAttribute('style', 'list-style-type: none');
  var li1 = document.createElement('li');
  var li2 = document.createElement('li');
  var li3 = document.createElement('li');
  var li4 = document.createElement('li');
  answers.appendChild(li1);
  answers.appendChild(li2);
  answers.appendChild(li3);
  answers.appendChild(li4);

  // Set text content of answers and make them buttons, then append them to the li's
  var a = document.createElement('button');
  var b = document.createElement('button');
  var c = document.createElement('button');
  var d = document.createElement('button');
  a.textContent = 'A. console log';
  b.textContent = 'B. for loops';
  c.textContent = 'C. JavaScript';
  d.textContent = 'D. terminal/bash';
  li1.appendChild(a);
  li2.appendChild(b);
  li3.appendChild(c);
  li4.appendChild(d);

  // Set classes for correct answer
  a.setAttribute('class', 'right-answer');

  // Set classes for incorrect answers
  b.setAttribute('class', 'wrong-answer');
  c.setAttribute('class', 'wrong-answer');
  d.setAttribute('class', 'wrong-answer');


  // Create event listener to call right answer when clicked
  document.querySelector('.right-answer').addEventListener('click', correctAnswer);

  // Create event listener to call wrong answer when clicked
  document.querySelector('.wrong-answer').addEventListener('click', incorrectAnswer);

  // Call the Function for the third question
  document.querySelector('.right-answer').addEventListener('click', allDone);

  document.querySelector('.wrong-answer').addEventListener('click', allDone);
}

/* --> All done <-- */
  function allDone(event) {
    event.preventDefault();

  // Clear main
  main.textContent = '';

  // Create box to contain text
  var boxEl = document.createElement('div');
  main.appendChild(boxEl);

  // Create h2 text and append it to the box 
  var headText = document.createElement('h2');
  headText.textContent = 'All done!';
  boxEl.appendChild(headText);
  var subText = document.createElement('p');
  subText.textContent = 'Your final score is: ';
  boxEl.appendChild(subText);

  // Create the form for user to input initials
  var formEl = document.createElement('form');
  formEl.textContent = 'Enter initials: ';
  formEl.setAttribute('type', 'form');
  boxEl.appendChild(formEl);

  var input = document.createElement('input');
  var submit = document.createElement('button');
  submit.textContent = 'Submit';
  submit.setAttribute('style', 'margin-left: 10px');
  formEl.appendChild(input);
  formEl.appendChild(submit);



  }


