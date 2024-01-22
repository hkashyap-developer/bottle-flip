import $ from 'jquery';
import Sound from "./bottle-sound-3.mp3"
import waterBottleSound from "./water-bottle-sound.mp3"
import Result from "./result.mp3"


$(document).ready(function(){



let finalRot = ""; 
let currBottle = ""; 
let rotationAudioToPlay;
let netRotation = 0;
let rotString = "";  
let randomnumber; 

  $(".rot-img").click(function(){

    randomnumber=0; 
    randomnumber = Math.floor(Math.random() * (4000 - 360 + 1)) + 360;
    netRotation = netRotation + randomnumber; 


    rotString=netRotation + 'deg';  
    rotString= "rotate(" + rotString + ")"; 

    console.log(rotString);


    /* To Play Sound On Rotation */


    currBottle = $(".rot-img").attr("src"); 

    if (currBottle === "/static/media/bisleri.dd2a5bf9ba1d21bf4aa4.png" || currBottle === "/static/media/jerican.b5ab757bc58a1b941299.png") {
        rotationAudioToPlay = waterBottleSound; 
    }
    else{
        rotationAudioToPlay = Sound;
    }





    const audio = new Audio(rotationAudioToPlay)
    audio.play()





    $(".rot-img").css(
        {
            "-moz-transform": rotString,
            "-webkit-transform": rotString,
            "transform": rotString               
        }
    );       
    



    if(randomnumber>1000) {



        setTimeout(function(){

            const audio = new Audio(Result)
            audio.play()

        }, 5000);~
        /*
        $(".rot-img").css(
            {

                "marin-left": "100px",  
                "margin-top": "200px"
            }
        ); 
        alert("आराम से घुमाओ, बोतल गिर के टूट जाएगी "); 
        */



    }
    else {
        alert("Okay"); 
    }

  }); 
});
