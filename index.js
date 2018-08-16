(function() {
  'use strict';
  let stopButton = document.getElementById('stopButton');
  let slowButton = document.getElementById('slowButton');
  let goButton = document.getElementById('goButton');

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
  function mouseOutStop (){
    console.log('Left Stop Button');

  }
  stopButton.addEventListener('mouseover', mouseOverStop);
  stopButton.addEventListener('mouseout', mouseOutStop);
  // YOUR CODE HERE



  // SLOWBUTTON

   slowButton.addEventListener('click', function(){
     if (slowLight.style.backgroundColor === 'yellow') {
       slowLight.style.backgroundColor = 'black'
       console.log('Slow light is off!');
     } else if (slowLight.style.backgroundColor !== 'yellow') {
       slowLight.style.backgroundColor = 'yellow';
       console.log('Slow light is On!');
     }

   })

   function mouseOverSlow() {
     console.log('Entered Slow Button')
   }
   function mouseOutSlow() {
     console.log('Left Slow Button')
   }

   slowButton.addEventListener('mouseover' , mouseOverSlow)
   slowButton.addEventListener('mouseout' , mouseOutSlow)

//GO Button

  goButton.addEventListener('click' , function(){
    if (goLight.style.backgroundColor === 'green'){
      goLight.style.backgroundColor = 'black'
      console.log('Go light is off!');
    } else if (goLight.style.backgroundColor !== 'green'){
      goLight.style.backgroundColor = 'green';
      console.log('Go light is on!')
    }
  })

  function mouseOverGo() {
    console.log('Entered Go Button')
  }
  function mouseOutGo() {
    console.log('Left Go Button')
  }

  goButton.addEventListener('mouseover' , mouseOverGo)
  goButton.addEventListener('mouseout' , mouseOutGo)
})();
