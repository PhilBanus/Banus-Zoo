
//All animals are dead
function checkAllAreDead(){
if ($('.animal[title=alive]').length === 0) { 
   alert("All the Animals are Dead, Click OK to start again.");
    location.reload();
}
}
setInterval('checkAllAreDead()', 1000);






 //make sure animal is dead 


function updatedeath(){
    
    //find animals where title is dead ensure they die
     $('.animal[title=dead]').each(function() {
           
          $(this).find(".elephant").parent(".animal").stop().fadeOut(800);
          $(this).find(".monkey").parent(".animal").stop().fadeOut(800);
          $(this).find(".giraffe").parent(".animal").stop().fadeOut(800);
         
     });
    
    
    
    // find elephants that are still sick and make sure they die
   $('.animal[title=alive]').each(function() {
         
         //Get Current health
         var animalHealth = $(this).find(".health").html();
         //remove % for math
         var removePercentage = animalHealth.replace('%','');
         //remove random health number
       
       
            //stop elephant under sick variable
     if(removePercentage < sickElephant ){ 
     
        // add 1 close to death count and to stop movement and to prepare for death on deathElephant variable
         var closeToDeathCount = $(this).data("closeToDeath");
        var NewDeathCount = parseFloat(closeToDeathCount)+1; 
         
         $(this).data("closeToDeath", NewDeathCount); 
        
         $(this).find(".elephant").parent(".animal").stop(0);
         
            
   
                             }
       
   })
    
    
    }

setInterval('updatedeath()', 1000);

