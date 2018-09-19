
// Feed Animals


$("#feedZoo").click(function(feed) {
    
     "use strict";
    //stop page refreshing
    feed.preventDefault();
    //add one to hour count
    
    
    //find food count for animal groups from variables.js
    var monkeyFood = returnRandomNumber(foodMin,foodMax);
    var giraffeFood = returnRandomNumber(foodMin,foodMax);
    var elephantFood = returnRandomNumber(foodMin,foodMax); 
    
    //Feed giraffes
      $(".giraffe").parent(".animal[title=alive]").each(function() {
         
         //Get Current health
         var animalHealth = $(this).find(".health").html();
         //remove % for math
         var removePercentage = animalHealth.replace('%','');
         //add random health number
         var calculateAnimalHealth = parseFloat(removePercentage) + parseFloat(giraffeFood);
          
        if(calculateAnimalHealth > 100){ var NewanimalHealth = 100 ; } else { var NewanimalHealth = calculateAnimalHealth; } ;
          
        // display health number
        $(this).find(".health").html(NewanimalHealth+"%");
         
          
          //check health colour guide
         
         if(NewanimalHealth > 80 ){  $(this).find(".health").removeClass("bg-warning"); }
         
         
    
     // giraffe close to death
    if(NewanimalHealth > giraffeWarning ){  $(this).find(".giraffe").siblings(".health").removeClass("bg-danger"); }
     
 
          
          
      }); 
    
    
    
    //Feed Elephants
      $(".elephant").parent(".animal[title=alive]").each(function() {
         
         //Get Current health
         var animalHealth = $(this).find(".health").html();
         //remove % for math
         var removePercentage = animalHealth.replace('%','');
         //add random health number
         var calculateAnimalHealth = parseFloat(removePercentage) + parseFloat(elephantFood);
          
        if(calculateAnimalHealth > 100){ var NewanimalHealth = 100 ; } else { var NewanimalHealth = calculateAnimalHealth; } ;
          
        // display health number
        $(this).find(".health").html(NewanimalHealth+"%");
         
          
          //check health colour guide
         
         if(NewanimalHealth > 80 ){  $(this).find(".health").removeClass("bg-warning"); }
         
         
    
     // elephant close to death
    if(NewanimalHealth > elephantWarning ){  $(this).find(".elephant").siblings(".health").removeClass("bg-danger"); }
     
          
       //let elephant walk again
           if(NewanimalHealth >= elephantWarning ){ 
                AniAnimal( $(this).find(".elephant").parent(".animal") );
                   $(this).find(".elephant").parent(".animal").data("closeToDeath", 0); 
                }
     
          // kill elephant if below 70 still
            if(NewanimalHealth < elephantWarning ){ 
                    //show dead text and black badge
    $(this).find(".elephant").siblings(".health").addClass("bg-dark text-white");
     $(this).find(".elephant").siblings(".health").html("Dead");
        // change title attribute to not alive to stop movement
     $(this).find(".elephant").parent(".animal").attr("title","dead");
     $(this).find(".elephant").parent(".animal").stop().fadeOut(2000);
                  $(this).data("closeToDeath", 2); 
                }
     
 
          
          
 
          
          
      }); 
    
    
      //Feed Monkeys
      $(".monkey").parent(".animal[title=alive]").each(function() {
         
         //Get Current health
         var animalHealth = $(this).find(".health").html();
         //remove % for math
         var removePercentage = animalHealth.replace('%','');
         //add random health number
         var calculateAnimalHealth = parseFloat(removePercentage) + parseFloat(monkeyFood);
          
        if(calculateAnimalHealth > 100){ var NewanimalHealth = 100 ; } else { var NewanimalHealth = calculateAnimalHealth; } ;
          
        // display health number
        $(this).find(".health").html(NewanimalHealth+"%");
         
          
          //check health colour guide
         
         if(NewanimalHealth > 80 ){  $(this).find(".health").removeClass("bg-warning"); }
         
         
    
     // Monkey close to death
    if(NewanimalHealth > monkeyWarning ){  $(this).find(".monkey").siblings(".health").removeClass("bg-danger"); }
     
 
          
          
      }); 
    
    
    
    
}
                   
                   
                   
                   );


    