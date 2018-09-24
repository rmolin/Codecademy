const getSleepHours = day => {
  if(day === 'monday'){
    return 8;
  } else if(day === 'tuesday'){
    return 8;
  } else if(day === 'wednesday'){
    return 8;
  } else if(day === 'thursday'){
    return 8;
  } else if(day === 'friday'){
    return 8;
  } else if(day === 'saturday'){
    return 8;
  } else if(day === 'sunday'){
    return 8;
  }
};

const getActualSleepHours = () =>
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = () => {
  const idealHours = 9;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  const leftoverSleep = getIdealSleepHours() - getActualSleepHours();
  if (actualSleepHours === idealSleepHours){
    console.log('You have gotten the perfect amount of sleep!');
  } else if(actualSleepHours > idealSleepHours){
    console.log('You have gotten more sleep than you want.');
  } else if (actualSleepHours < idealSleepHours){
    console.log('You should rest for ' + leftoverSleep + ' more hours.');
  }
};

calculateSleepDebt();
