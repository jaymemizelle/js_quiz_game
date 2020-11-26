// Button on first page
var startQuiz = document.querySelector('#start-quiz');

startQuiz.addEventListener('click', firstQuestion);

var secondsLeft = 76;
var time = document.createElement('h5');
var header = document.querySelector('header');
var main = document.querySelector('main');

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

// Function which creates the first question
function firstQuestion (event) {
    timerBegin();
    event.preventDefault();
    console.log('Quiz has started');
    main.textContent = '';
    var boxEl = document.createElement('div');
    document.body.appendChild(boxEl);
    var question1El = document.createElement('h2');
    question1El.textContent = 'Commonly used data types DO NOT include: ';
    boxEl.appendChild(question1El);
    var answers = document.createElement('ol');
    document.body.appendChild(answers);
    answers.setAttribute('style', 'list-style-type: none');
    var li1 = document.createElement('li');
    var li2 = document.createElement('li');
    var li3 = document.createElement('li');
    var li4 = document.createElement('li');
    var a = document.createElement('button');
    var b = document.createElement('button');
    var c = document.createElement('button');
    var d = document.createElement('button');
    a.textContent = 'A. strings';
    b.textContent = 'B. booleans';
    c.textContent = 'C. alerts';
    d.textContent = 'D. numbers';
    answers.appendChild(li1);
    answers.appendChild(li2);
    answers.appendChild(li3);
    answers.appendChild(li4);
    li1.appendChild(a);
    li2.appendChild(b);
    li3.appendChild(c);
    li4.appendChild(d);
}


