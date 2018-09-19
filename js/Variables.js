
//set death variables
var deathGiraffe = 50;
var deathMonkey = 30;
//when elephant has been below 70 health longer than an hour value is 2 (every hour under 70 + 1)
var deathElephant = 2;
var sickElephant = 70; 

//lowhealth warnings
var elephantWarning = 70;
var monkeyWarning = 50; 
var giraffeWarning = 70; 

// health removal min and max 
var healthMin = 0;
var healthMax = 20;

//food levels variables
var foodMin = 10;
var foodMax = 25;





// Start Time 08:00 then check for added hour

  function updateClock()
    {
        
               
        //set to known monday date - week begins on monday (assumption that month and year is not required)
        var currentTime = new Date (" 09/03/2018 ");
        
        // set time to 8 + any hours added 
        currentTime.setHours(8 + HourCount);
        currentTime.setMinutes(0);
        currentTime.setSeconds(0);
      
        
        
   
        var currentHours = currentTime.getHours();
        var currentMinutes = currentTime.getMinutes ( );
        var currentSeconds = currentTime.getSeconds ( );

        currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
        currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
        
        var currentTimeString = currentHours + ":" + currentMinutes ;

        $("#DisplayTime").text(currentTimeString);
        
        
        var weekday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
        var currentDay = weekday[currentTime.getDay()];
       

        var currentDateString = currentDay   ;

        $("#DisplayDate").text(currentDateString);

     }

//check every second
       setInterval('updateClock()', 1000);
   

// Modify sizes of animals 


function ChangeSize($target) {
    
  //call retunRandomNumber from AnimalHealth.js
    
    $target.children(".elephant").css('width', '+'+returnRandomNumber(12,20)+'%');
    $target.children(".giraffe").css('width', '+'+returnRandomNumber(4,6)+'%');
    $target.children(".monkey").css('width', '+'+returnRandomNumber(2,4)+'%');
    
    
}

// Animate animals


function makeNewPosition($container) {

    // Keep animals in the cage devide rather than - when percentages invloved
    var h = $container.height() / 1.4 ; 
    var w = $container.width() / 1.3 ;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

function AniAnimal($target) {
    //check dead or alive dont move if dead
    var deadOrAlive = $target.attr("title");
    
    if(deadOrAlive === "alive"){
    
    var newq = makeNewPosition($target.parent());
    var oldq = $target.offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
   
    $target.animate({
        top: newq[0],
        left: newq[1]
    }, speed, function() {
        AniAnimal($target);
    });
        
       
        
        
        
        }

};




// set speed

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.05;

    var speed = Math.ceil(greatest / speedModifier);

    return speed;

}





// Set Hour Count variable
var HourCount = 0; 




// Animal Inital Health is 100%
if(HourCount === 0){
 $('.animal').each(function() {
     
     var animalHealth = 100;
      var closeToDeathCount = 0;
     
     $(this).find(".health").html(animalHealth+"%");
     $(this).data("closeToDeath",closeToDeathCount);
     
 });
    
    }


$('.health').each(function() {

    if(  $(this).html() === "100%"){
         $(this).addClass("bg-success");
     }
                   });






//Calculation to be used for number calculations

function returnRandomNumber(min, max) {
// return number between min and max
  return Math.floor(Math.random() * (max - min + 1)) + min;
}




