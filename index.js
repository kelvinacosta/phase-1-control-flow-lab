function scuberGreetingForFeet(customer){
  // Write your code here!
  if(customer < 400) {
    return 'This one is on me!'
  }else if(customer >400 && customer <2000){
    return 'That will be twenty bucks.'
  }else if(customer>2000 && customer <2500){
    return 'I will gladly take your thirty bucks.'
  }else if (customer > 2500){
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  if(city === 'NYC'){
    return 'Ok, sounds good.'
  }else{
    return 'No go.'
  }
}

function switchOnCharmFromTip(generous){
  // Write your code here!
  if(generous === 'generous'){
    return 'Thank you so much.'
  }else if(generous === 'not as generous'){
    return 'Thank you.'
  }else{
    return 'Bye.'
  }


}