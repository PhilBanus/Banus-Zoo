


// Add one hour 

$( "#addHour" ).click(function(btn) {
    "use strict";
    
    
   
    //stop page refreshing
    btn.preventDefault();
    //add one to hour count variables.js
HourCount++;
//Display Hours Passed
$('#DisplayHour').html(HourCount+" hr");


      
    
    
  // Destroy Health
    
    //find Each animal 
     $('.animal[title=alive]').each(function() {
         
         //Get Current health
         var animalHealth = $(this).find(".health").html();
         //remove % for math function
         var removePercentage = animalHealth.replace('%','');
         //remove random health number generated from variables
         var NewanimalHealth = removePercentage - returnRandomNumber(healthMin,healthMax);
        
         // display health number
        $(this).find(".health").html(NewanimalHealth+"%");
         
        // change colour if health is under certain values
         if(NewanimalHealth < 80 ){  $(this).find(".health").addClass("bg-warning"); }
         
         
     //elephant close to death 
    if(NewanimalHealth < elephantWarning ){  $(this).find(".elephant").siblings(".health").addClass("bg-danger"); }
     
     // giraffe close to death
    if(NewanimalHealth < giraffeWarning ){  $(this).find(".giraffe").siblings(".health").addClass("bg-danger"); }
     
    // Monkey close to death
    if(NewanimalHealth < monkeyWarning ){  $(this).find(".monkey").siblings(".health").addClass("bg-danger"); }
     
         
         //stop elephant under sick variable
     if(NewanimalHealth < sickElephant ){ 
     
        // add 1 close to death count and to stop movement and to prepare for death on deathElephant variable
         var closeToDeathCount = $(this).data("closeToDeath");
        var NewDeathCount = parseFloat(closeToDeathCount)+1; 
         
         $(this).data("closeToDeath", NewDeathCount); 
        
         $(this).find(".elephant").parent(".animal").stop(0);
         
            
   
                             }
         
         
         //Kill Elephant under death variable
    
    if($(this).data("closeToDeath") >= deathElephant ){ 
        //show dead text and black badge
    $(this).find(".elephant").siblings(".health").addClass("bg-dark text-white");
     $(this).find(".elephant").siblings(".health").html("Dead");
        // change title attribute to not alive to stop movement
     $(this).find(".elephant").parent(".animal").attr("title","dead");
     $(this).find(".elephant").parent(".animal").stop().fadeOut(2000);
     
                             
                             }
     
         
        //Kill Giraffes under death variable
    
    if(NewanimalHealth < deathGiraffe ){ 
        //show dead text and black badge
    $(this).find(".giraffe").siblings(".health").addClass("bg-dark text-white");
     $(this).find(".giraffe").siblings(".health").html("Dead");
        // change title attribute to not alive to stop movement
     $(this).find(".giraffe").parent(".animal").attr("title","dead");
     $(this).find(".giraffe").parent(".animal").stop().fadeOut(2000);
     
                             
                             }
         
         
         
         //Kill Monkey under death variable
    
    if(NewanimalHealth < deathMonkey ){  $(this).find(".monkey").siblings(".health").addClass("bg-dark text-white");
     $(this).find(".monkey").siblings(".health").html("Dead");
     $(this).find(".monkey").parent(".animal").attr("title","dead");
     $(this).find(".monkey").parent(".animal").stop().fadeOut(2000);
     
                             
                             }
        
         
         
         
         
         
     
     
     });
    
    
  
    
   
    
    
    
    
});


    