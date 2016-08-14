// example of legacy code
$(document).ready(function() {

  var resultElement = $('#result');

  $('#inc').bind('click', function(e) {
    var num = +resultElement.text() || 0;
    resultElement.html(increase(num));
  });

  $('#dec').bind('click', function(e) {
    var num = +resultElement.text() || 0;
    resultElement.html(decrease(num));
  });

});

// global functions

function increase(num) {
  return num + 1;
}

function decrease(num) {
  return num - 1;
}
