(function() {
  'use strict';
  let stopbutton = document.getElementById('stopButton');
  let slowbutton = document.getElementById('slowButton');
  let gobutton = document.getElementById('goButton');

  let stopLight = document.getElementById('stopLight');
  let slowLight = document.getElementById('slowLight');
  let goLight = document.getElementById('goLight');

  //STOPBUTTON

  stopButton.addEventListener('click', function(){
    if (stopLight.style.backgroundColor === 'red'){
      stopLight.style.backgroundColor = 'black'
      console.log('Stoplight is off!');
    } else if (stopLight.style.backgroundColor !== 'red'){
      stopLight.style.backgroundColor = 'red'
      console.log('Stoplight is on!');
    }

  })

  function mouseOverStop (){
    console.log('Entered Stop Button!');
  }
  function mouseOutStop ()
  {
    console.log('Left Stop Button');

  }
  stopButton.addEventListener('mouseover', 'mouseOutStop');
  stopButton.addEventListener('mouseout', 'mouseOutStop');
  // YOUR CODE HERE
})();
