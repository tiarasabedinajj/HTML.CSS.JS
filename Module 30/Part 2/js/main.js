var wakeuptime;
var dstime;
var sleeptime;
var noon= 12;

function showCurrentTime(){
    var clock = document.getElementById ('clock')
    var currentTime = new Date ();

    var hours = currentTime.getHours();
       var minutes = currentTime.getHours ();
      var seconds = currentTime.getSeconds ();
    
      var meridian = "AM";

      if(hours >=noon){
        meridian = "PM";
      }


var clockTime = hours + ":"+ minutes + ":" + seconds " " + meridian

clock.innerText = clockTime;

changeImage();


};

var oneSecond = 1000;
selfInternal (Show current.Time Onesecond);

 function changeImage (){
    var time = new Date (), getHours ();
    console.log(time);

  var image = img/img.rar.url ;
  var imageHTML = document.getElementById('TimeChange');

  if (time==wakeuptime){
    image=
  }

  else if(time==dstime){
    image =
  }

 else if(time==sleeptime){
    image =
  }
imageHTML.src= image ;
 }



 function updateClock(){
    varwakeupTimeSelector = document.getElementById ('wakeupTimeSelector');
 }