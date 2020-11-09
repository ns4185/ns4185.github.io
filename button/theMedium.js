console.log("the Message!!");
//
let colors = ["blue", "pink", "green", "purple"];

// pass the all the HTML in the body tags into a variable 
const theBody = document.querySelector('body');
// console.log(theBody);
// .style is the property that holds all the sub CSS properties!
console.log(theBody.style);
let theText = document.querySelector('h2');

// .textContent holds the human readable text inside the HTML element text
// console.log(theText.textContent)
// pass the HTML element into a variable
let b1 = document.querySelector("#theFirst");
let b2 = document.querySelector("#theSecond");
let b3 = document.querySelector("#theThird");
let b4 = document.querySelector("#theFourth");

// add an eventListener to the button and trigger a function when it happend
b1.addEventListener('click', Function1);
b2.addEventListener('click', Function2);
b3.addEventListener('click', Function3);
b4.addEventListener('click', Function4);


function Function1(){
 // console.log("click!");
    const rand = Math.floor(Math.random()*4);
    b1.style.backgroundColor= colors[rand];
    
    let audio = new Audio("bassdrum.mp3" ) ;

    audio.oncanplaythrough = function(){
        audio.play();
    }

    audio.loop = true;

    // audio.onended = function(){
    //     audio.play();
    // }
    //code from https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click//
}

function Function2(){
    // console.log("click!");
    const rand = Math.floor(Math.random()*4);
    b2.style.backgroundColor= colors[rand];

    let audio = new Audio("cymbal.mp3" ) ;

    audio.oncanplaythrough = function(){
        audio.play();
    }

    audio.loop = true;

 }

function Function3(){
    // console.log("click!");
    const rand = Math.floor(Math.random()*4);
    b3.style.backgroundColor= colors[rand]
    
    let audio = new Audio("chord.mp3" ) ;

    audio.oncanplaythrough = function(){
        audio.play();
    }

    audio.loop = true;

}

function Function4(){
    // console.log("click!");
    const rand = Math.floor(Math.random()*4);
    b4.style.backgroundColor= colors[rand];

    let audio = new Audio("clap.mp3" ) ;

    audio.oncanplaythrough = function(){
        audio.play();
    }

    audio.loop = true;

   }
