// Random race number
let raceNumber = Math.floor(Math.random() * 1000);

// If they regestered early or not
const earlyRegistration = true;

// A runners age
const runnersAge = 25;

if (earlyRegistration === true && runnersAge > 18) {
  raceNumber = raceNumber + 1000;
}

// Control flow of race times based on age
// and time of registration
if(earlyRegistration === true && runnersAge > 18){
	console.log(raceNumber + ', 9:30 am is your race time!')
} else if(earlyRegistration === false && runnersAge > 18){
  console.log(raceNumber + ', 11:00 am is your race time!')
} else if(runnersAge < 18){
  console.log(raceNumber + ', 12:30 pm is your race time!')
} else{
  console.log(raceNumber + ', Please see the registration desk.')
}
