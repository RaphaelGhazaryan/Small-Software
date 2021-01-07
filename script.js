'use strict';

document.querySelector('.btn').addEventListener('click', function () {
  var guess = document.querySelector('input');
  guess.onkeyup = function () {
    document.getElementById('content').innerHTML = guess.value;
  };

  if (!guess) {
    document.querySelector('.message').textContent =
      'Please type in something valid';
  }
});
