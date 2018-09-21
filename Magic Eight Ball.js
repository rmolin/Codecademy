let userName = 'Ryan'
userName ? console.log('Hello ' + userName + '!'):
console.log(userName)

let userQuestion = 'Is this question okay?'
console.log(userQuestion)

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

switch(randomNumber){
  case 0:
	  eightBall = 'It is certain';
	  break;
  case 1:
	  eightBall = 'It is decidedly so';
	  break;
  case 2:
	  eightBall = 'Reply hazy try again';
	  break;
  case 3:
	  eightBall = 'Do not count on it';
	  break;
  case 4:
	  eightBall = 'My sources say no';
	  break;
  case 5:
	  eightBall = 'Outlook not so good';
	  break;
  case 6:
	  eightBall = 'Signs point to yes';
	  break;
  case 7:
	  eightBall = 'It is certain';
	  break;
  case 8:
    eightBall = 'No';
    break;
}

console.log(eightBall);


/// Extra Practice ///

if(randomNumber = 0){
  eightBall = 'It is Certain';
} else if(randomNumber = 1) {
	eightBall = 'It is decidedly so';
} else if(randomNumber = 2) {
	eightBall = 'Reply hazy do not count on it';
} else if(randomNumber = 3) {
	eightBall = 'Do not count on it';
} else if(randomNumber = 4) {
	eightBall = 'My sources say no';
} else if(randomNumber = 5) {
	eightBall = 'Outlook not so good';
} else if(randomNumber = 6) {
	eightBall = 'Signs point to yes';
} else if(randomNumber = 7) {
	eightBall = 'It is certain';
} else {
	eightBall = 'No';
}

console.log(eightBall);
