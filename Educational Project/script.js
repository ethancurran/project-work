 //Game 1//
function check(){

	var question_One = document.quiz.question_One.value;
	var question_Two = document.quiz.question_Two.value;
	var question_Three = document.quiz.question_Three.value;
    var question_Four = document.quiz.question_Four.value;
	var correct = 0;

	if (question_One == "Ate") {
		correct++;
    }   
	
    if (question_Two == "Scored") {
		correct++;
    }

	if (question_Three == "Type") {
		correct++;
	}

    if (question_Four == "Painted") {
		correct++;
	}
	
	var messages = ["FULL MARKS, FANTASTIC!!", "Good job, Your nearly there", "OH NO, Try again!"];
	var score;

	if (correct < 2) {
		score = 2;
	}

	if (correct > 1 && correct < 3) {
		score = 1;
	}

	if (correct == 4) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	}

//Game 2//
const correctWord = ["grapes"];

let randNum = Math.floor(Math.random() * correctWord.length);
let chosenWord = correctWord[randNum];
console.log(chosenWord);
let rightWord = [];
let wrongWord = [];

// Dom Manipulation
let docUnderscore = document.getElementsByClassName("underscore");
let docRightGuess = document.getElementsByClassName("correctGuess");
let docWrongGuess = document.getElementsByClassName("incorrectGuess");

let underscore = [];
let generateUnderscores = () => {
    for (let i = 0; i < chosenWord.length; i++) {
        if(chosenWord[i] != ' ') {
            underscore.push('_');
            //docUnderscore[0].innerHTML = underscore.join(' ');
        }
        else {
            underscore.push(' ');
        }
    }
    console.log(underscore);
    return underscore;
}

// =============================================================
// Get user's guess
// =============================================================
document.addEventListener('keypress', (event) => {
    let keyCode = event.keyCode;
    let keyWord = String.fromCharCode(keyCode);
    // =========================================================
    // Check if user's guess is right
    // =========================================================
    if(chosenWord.indexOf(keyWord) > -1) {
        // Add to the right word array
        rightWord.push(keyWord);

        // Replace underscore with right letter
        underscore[chosenWord.indexOf(keyWord)] = keyWord;
        docUnderscore[0].innerHTML = underscore.join('');
        docRightGuess[0].innerHTML = rightWord.join('');

        // Check to see if user's word matches guesses
        if(underscore.join('') == chosenWord) {
            alert('You Win!');
           

        }
    }
    else {
        // Add to the wrong word array
        wrongWord.push(keyWord);
        docWrongGuess[0].innerHTML = wrongWord.join('');
    }
});

docUnderscore[0].innerHTML = generateUnderscores().join(' ');

//Game 3//
document.addEventListener('DOMContentLoaded', (event) => {

  function handleDragStart(e) {
    this.style.opacity = '0.5';

    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  }

  function handleDragEnd(e) {
    this.style.opacity = '1';

    items.forEach(function (item) {
      item.classList.remove('over');
    });
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    return false;
  }

  function handleDragEnter(e) {
    this.classList.add('over');
  }

  function handleDragLeave(e) {
    this.classList.remove('over');
  }

  function handleDrop(e) {
    e.stopPropagation(); 
    
    if (dragSrcEl !== this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
  }

  return false;
}

  let items = document.querySelectorAll('.overall .letters');
  items.forEach(function(item) {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('dragenter', handleDragEnter);
    item.addEventListener('dragleave', handleDragLeave);
    item.addEventListener('dragend', handleDragEnd);
    item.addEventListener('drop', handleDrop);
  });
});

