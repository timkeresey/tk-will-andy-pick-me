var possibleAnswers = [
'It is certain',
'It is decidedly so',
'Without a doubt',
'Yes - definitely',
'You may rely on it',
'As I see it, yes',
'Most likely',
'Outlook good',
'Yes',
'Signs point to yes',
'Reply hazy, try again',
'Ask again later',
'Better not tell you now',
'Cannot predict now',
'Concentrate and ask again',
"Don't count on it",
'My reply is no',
'My sources say no',
'Outlook not so good',
'Very doubtful']

var questionButton = document.querySelector('#answer-generator');
var questionForm = document.querySelector('#question-form');
var question = document.querySelector('.question');
var answer = document.querySelector('.answer');
var eightBall = document.querySelector('.eight-ball-img');
var response = document.querySelector('.response');

questionButton.addEventListener('click', getAnswer);

function getAnswer() {
  response.classList.remove('hidden');
  eightBall.classList.add('hidden');
  question.innerText = `"${questionForm.value}"`;
  answer.innerText = possibleAnswers[getRandomIndex(possibleAnswers)];
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
