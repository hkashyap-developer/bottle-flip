import $ from 'jquery';
import changeSound from "./changeSound.mp3"


$(document).ready(function(){





  $(".switch").click(function(){


    /* To Play Sound Bottle Change */

    const audio = new Audio(changeSound)
    audio.play()

    let changeBottle = $(this).attr("src");
    console.log(changeBottle); 

    $(".rot-img").attr("src", changeBottle); 
    


  }); 



});
