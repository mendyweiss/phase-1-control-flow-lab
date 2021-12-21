function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance <= 400){
      return "This one is on me!";
  } else if (distance > 400 && distance < 2500) {
      return 'I will gladly take your thirty bucks.';
  } else {
    return "No can do.";
  }
}

function ternaryCheckCity(city){
    // Write your code here!
  let cityName = city === 'NYC' ? 'Ok, sounds good.' : "No go.";
  return cityName;
  }

function switchOnCharmFromTip(tipAmount){
  // Write your code here!
  switch(tipAmount){
    case 'generous':
      return "Thank you so much.";
      break;
    case 'not as generous':
      return "Thank you.";
      break;
    default:
      return "Bye."
  }
}