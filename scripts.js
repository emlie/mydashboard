// get HTML elements
var clock = document.querySelector('.clock');





// insert clock
function showTime() {
  var now = new Date();
  var hours = now.getHours();
  var mins = now.getMinutes();
  var secs = now.getSeconds();
  clock.innerHTML = `${hours} : ${mins}`;
};

showTime()
