// Start quiz button functionality
var startQuiz = document.querySelector('#start-quiz');
startQuiz.addEventListener('click', firstQuestion);

// View Highscores
var viewHighscore = document.querySelector('.highscores')
viewHighscore.addEventListener("click", highscores);

// Global variables
var secondsLeft = 76;
var time = document.querySelector('h5');
var header = document.querySelector('header');
var main = document.querySelector('main');
var score = 0;

/* -- > Creates timer <-- */
function timerBegin() {
    var timerInterval = setInterval(function () {
      secondsLeft--;
      
      time.textContent = "Timer: " + secondsLeft;
      header.appendChild(time);
  
      // Clears timer and goes to allDone page when it hits 0
      if (secondsLeft === 0) {
        clearInterval(timerInterval);
        allDone();
      } 
    }, 1000);
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
    var questionEl = document.createElement('h2');
    questionEl.textContent = 'Commonly used data types DO NOT include: ';
    boxEl.appendChild(questionEl);

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

    // Variables which select the user's answer by class
    var userRight = document.querySelector('.right-answer');
    var userWrong = document.querySelector('.wrong-answer');

    // If user clicks right answer, execute this function:
  userRight.addEventListener('click', function(){

      // Adds 10 points to score
      score += 10;

      // Prints 'correct answer!'
      var line = document.createElement('hr');
      answers.appendChild(line);
      var rightAnswer = document.createElement('p');
      rightAnswer.setAttribute('style', 'font-style: italic');
      rightAnswer.textContent = 'Correct Answer!'
      answers.appendChild(rightAnswer);

      // Waits 1 second, then calls next question
      setTimeout(secondQuestion, 1000);
  });

  // If user clicks wrong answer, then execute this function:
  userWrong.addEventListener('click', function(){

    // Subtracts 5 points from score
    score -= 5;

    // Subtracts 10 seconds from time
    secondsLeft = secondsLeft - 10;

    // Prints 'wrong answer!'
    var line = document.createElement('hr');
    answers.appendChild(line);
    var wrongAnswer = document.createElement('p');
    wrongAnswer.setAttribute('style', 'font-style: italic');
    wrongAnswer.textContent = 'Wrong Answer!'
    answers.appendChild(wrongAnswer);

    // Waits 1 second, then calls next question
    setTimeout(secondQuestion, 1000);
  })
    
}


/* --> Second question <-- */
function secondQuestion () {

  // Clear main content
  main.textContent = '';

  // Create box to contain question and answers
  var boxEl = document.createElement('div');
  main.appendChild(boxEl);

  // Create question and append them to the box 
  var questionEl = document.createElement('h2');
  questionEl.textContent = 'The condition in an if/else statment is enclosed within _______.';
  boxEl.appendChild(questionEl);

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


  // Variables which select the user's answer by class
  var userRight = document.querySelector('.right-answer');
  var userWrong = document.querySelector('.wrong-answer');

    // If user clicks right answer, execute this function:
  userRight.addEventListener('click', function(){

      // Adds 10 points to score
      score += 10;

      // Prints 'correct answer!'
      var line = document.createElement('hr');
      answers.appendChild(line);
      var rightAnswer = document.createElement('p');
      rightAnswer.setAttribute('style', 'font-style: italic');
      rightAnswer.textContent = 'Correct Answer!'
      answers.appendChild(rightAnswer);

      // Waits 1 second, then calls next question
      setTimeout(thirdQuestion, 1000);

  });

  // If user clicks wrong answer, then execute this function:
  userWrong.addEventListener('click', function(){

    // Subtracts 5 points from score
    score -= 5;

    // Subtracts 10 seconds from time
    secondsLeft = secondsLeft - 10;

    // Prints 'wrong answer!'
    var line = document.createElement('hr');
    answers.appendChild(line);
    var wrongAnswer = document.createElement('p');
    wrongAnswer.setAttribute('style', 'font-style: italic');
    wrongAnswer.textContent = 'Wrong Answer!'
    answers.appendChild(wrongAnswer);

    // Waits 1 second, then calls next question
    setTimeout(thirdQuestion, 1000);
  })
}

/* --> Third question <-- */
function thirdQuestion () {

  // Clear main content
  main.textContent = '';

  // Create box to contain question and answers
  var boxEl = document.createElement('div');
  main.appendChild(boxEl);

  // Create question and append them to the box 
  var questionEl = document.createElement('h2');
  questionEl.textContent = 'Arrays in JavaScript can be used to store _______.';
  boxEl.appendChild(questionEl);

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


    // Variables which select the user's answer by class
    var userRight = document.querySelector('.right-answer');
    var userWrong = document.querySelector('.wrong-answer');

    // If user clicks right answer, execute this function:
  userRight.addEventListener('click', function(){

      // Adds 10 points to score
      score += 10;

      // Prints 'correct answer!'
      var line = document.createElement('hr');
      answers.appendChild(line);
      var rightAnswer = document.createElement('p');
      rightAnswer.setAttribute('style', 'font-style: italic');
      rightAnswer.textContent = 'Correct Answer!'
      answers.appendChild(rightAnswer);

      // Waits 1 second, then calls next question
      setTimeout(fourthQuestion, 1000);
  });

  // If user clicks wrong answer, then execute this function:
  userWrong.addEventListener('click', function(){

    // Subtracts 5 points from score
    score -= 5;

    // Subtracts 10 seconds from time
    secondsLeft = secondsLeft - 10;

    // Prints 'wrong answer!'
    var line = document.createElement('hr');
    answers.appendChild(line);
    var wrongAnswer = document.createElement('p');
    wrongAnswer.setAttribute('style', 'font-style: italic');
    wrongAnswer.textContent = 'Wrong Answer!'
    answers.appendChild(wrongAnswer);

    // Waits 1 second, then calls next question
    setTimeout(fourthQuestion, 1000);
  })
}

/* --> Fourth question <-- */
function fourthQuestion () {

  // Clear main
  main.textContent = '';

  // Create box to contain question and answers
  var boxEl = document.createElement('div');
  main.appendChild(boxEl);

  // Create question and append them to the box 
  var questionEl = document.createElement('h2');
  questionEl.textContent = 'String values must be enclosed withing _____ when being assigned to variables.';
  boxEl.appendChild(questionEl);

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


    // Variables which select the user's answer by class
    var userRight = document.querySelector('.right-answer');
    var userWrong = document.querySelector('.wrong-answer');

    // If user clicks right answer, execute this function:
  userRight.addEventListener('click', function(){

      // Adds 10 points to score
      score += 10;

      // Prints 'correct answer!'
      var line = document.createElement('hr');
      answers.appendChild(line);
      var rightAnswer = document.createElement('p');
      rightAnswer.setAttribute('style', 'font-style: italic');
      rightAnswer.textContent = 'Correct Answer!'
      answers.appendChild(rightAnswer);

      // Waits 1 second, then calls next question
      setTimeout(fifthQuestion, 1000);
  });

  // If user clicks wrong answer, then execute this function:
  userWrong.addEventListener('click', function(){

    // Subtracts 5 points from score
    score -= 5;

    // Subtracts 10 seconds from time
    secondsLeft = secondsLeft - 10;

    // Prints 'wrong answer!'
    var line = document.createElement('hr');
    answers.appendChild(line);
    var wrongAnswer = document.createElement('p');
    wrongAnswer.setAttribute('style', 'font-style: italic');
    wrongAnswer.textContent = 'Wrong Answer!'
    answers.appendChild(wrongAnswer);

    // Waits 1 second, then calls next question
    setTimeout(fifthQuestion, 1000);
  })

}

/* --> Fifth question <-- */
function fifthQuestion () {

  // Clear main
  main.textContent = '';

  // Create box to contain question and answers
  var boxEl = document.createElement('div');
  main.appendChild(boxEl);

  // Create question and append them to the box 
  var questionEl = document.createElement('h2');
  questionEl.textContent = 'A very useful tool used during development and debugging for printing content to the debugger is: ';
  boxEl.appendChild(questionEl);

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


    // Variables which select the user's answer by class
    var userRight = document.querySelector('.right-answer');
    var userWrong = document.querySelector('.wrong-answer');

    // If user clicks right answer, execute this function:
  userRight.addEventListener('click', function(){

      // Adds 10 points to score
      score += 10;

      // Prints 'correct answer!'
      var line = document.createElement('hr');
      answers.appendChild(line);
      var rightAnswer = document.createElement('p');
      rightAnswer.setAttribute('style', 'font-style: italic');
      rightAnswer.textContent = 'Correct Answer!'
      answers.appendChild(rightAnswer);

      // Waits 1 second, then calls allDone 
      setTimeout(allDone, 1000);
  });

  // If user clicks wrong answer, then execute this function:
  userWrong.addEventListener('click', function(){

    // Subtracts 5 points from score
    score -= 5;

    // Subtracts 10 seconds from time
    secondsLeft = secondsLeft - 10;

    // Prints 'wrong answer!'
    var line = document.createElement('hr');
    answers.appendChild(line);
    var wrongAnswer = document.createElement('p');
    wrongAnswer.setAttribute('style', 'font-style: italic');
    wrongAnswer.textContent = 'Wrong Answer!'
    answers.appendChild(wrongAnswer);

    // Waits 1 second, then calls allDone
    setTimeout(allDone, 1000);
  })
}

/* --> All done <-- */
  function allDone() {
    

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
  subText.textContent = 'Your final score is: ' + score;
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


  submit.addEventListener('click', function(){   
    var initials = document.querySelector('input').value
    localStorage.setItem('user: ', initials);
    localStorage.setItem('score: ', score);
    highscores();
  });

 

  }

  /* --> Highscores page <-- */
function highscores() {
  // Clear main
  document.body.textContent = '';

  // Create box to contain text
  var boxEl = document.createElement('div');
  document.body.appendChild(boxEl);

  // Create highscores header
  var highHeader = document.createElement('h1');
  highHeader.textContent = 'Highscores';
  boxEl.appendChild(highHeader);

  //  Create highscores list
  // var user = localStorage.getItem(initials);
  // var listEl = document.createElement('div');
  // boxEl.appendChild(listEl);
  // var list = document.createElement('p');
  // list.textContent = user + score;
  // listEl.appendChild(list);
  


  // Create 'go-back' and 'clear-highscores' buttons
  var formEl = document.createElement('form');
  formEl.setAttribute('type', 'form');
  boxEl.appendChild(formEl);
  var goBack = document.createElement('button');
  var clearHighscores = document.createElement('button');
  goBack.textContent = 'Go Back';
  goBack.setAttribute('style', 'margin: 10px');
  goBack.setAttribute('type', 'submit');
  clearHighscores.setAttribute('style', 'margin: 10px');
  clearHighscores.textContent = 'Clear Highscores';
  formEl.appendChild(goBack);
  formEl.appendChild(clearHighscores);

  
  
}