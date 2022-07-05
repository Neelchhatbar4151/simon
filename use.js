let array = new Array;
let level = 1;
var check_e = 0;
let audio = new Audio('./sound.wav');
let tap = new Audio('./click.wav')
let lose = new Audio('./lose.wav')
function level_display(){
      $('#levels').text("Level "+level)
}
level_display();
function check()
{
      console.log(this.id)
      toggle(this.id);
      if(array[check_e] == this.id)
      { 

            document.querySelectorAll('button')[array[check_e]].style.opacity = 0.2;
            check_e++;
            if(check_e == level)
            {
                  console.log("you win")
                  for(var i = 0; i<4; i++)
                  {
                        document.querySelectorAll("button")[i].removeEventListener('click',check)
                        $('#start').text('Start !')
                  }
                  toggle_won();
                  level++;
                  check_e = 0;
                  level_display();
            }
            else{
                  tap.play();
            }
      }
      else{
            console.log("retry");
            for(var i = 0; i<4; i++)
            {
                  document.querySelectorAll("button")[i].removeEventListener('click',check)
            }
            lose.play();
            toggle_retry();
            check_e = 0;
      }
      
}

function toggle_won() {
      audio.play();
      $('#start').text('You Won !')
      document.querySelector('#start').style.backgroundColor = 'green';
      setTimeout(() => {
            $('#start').text('Start')
            document.querySelector('#start').style.backgroundColor = 'rgb(239, 239, 239)';
      }, 300);
}

function toggle_retry() {
      $('#start').text('Retry !')
      document.querySelector('#start').style.backgroundColor = 'red';
      setTimeout(() => {
            document.querySelector('#start').style.backgroundColor = 'rgb(239, 239, 239)';
      }, 300);
}

function toggle(id) {
      document.querySelectorAll('button')[id].style.opacity = 0.2;
      setTimeout(() => {
            document.querySelectorAll('button')[id].style.opacity = 1;
      }, 300);
}

function getRandom(level)
{
      array = []
      
      for(var i = 0; i<level ; i++)
      {
            array[i] = Math.floor(Math.random() * 4);
      }

      return array;
}

var i = 0;


let name1 = 0
function automation()
{
      check_e = 0;
      array = getRandom(level)
      i = 0;
      name1 = setInterval(auto,600)
}
function auto() {
      console.log(i)
      var temp = array[i]
      console.log(temp)
      document.querySelectorAll('button')[temp].style.opacity = 0.2;
      setTimeout(() => {
            document.querySelectorAll('button')[temp].style.opacity = 1;
      }, 500);
      
      i++;
      if(i >= level)
      {
            console.log("Clear")

            stop();
      }
}


function stop(){
      $('#start').text('Again')
      for(var i = 0; i<4; i++)
      {
            console.log("aw")
            document.querySelectorAll('button')[i].addEventListener('click',check)
            console.log(document.querySelectorAll('button')[i].style.backgroundColor);
      }
      clearInterval(name1);
}
$('#start').click(automation);