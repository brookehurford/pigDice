function dice(){
  return Math.floor(Math.random() * 6) + 1;
}



var pigDice = function(num) {
  if (num === 1) {
    return 1;
  }
  else if (num === 2) {
    return 2;
  }
  else if (num === 3) {
    return 3
  }
  else if (num === 4) {
    return 4
  }
  else if (num === 5) {
    return 5
  }
  else {
    return 6;
  }
};
