
//Detecting Button Press

   var numberOfButtons = document.querySelectorAll(".drum").length;

   for(var s = 0; s<numberOfButtons; s++){

    document.querySelectorAll(".drum")[s].addEventListener("click", function() {

   var buttonInnerHTML =this.innerHTML;

     makeSound(buttonInnerHTML);
     buttonAnimation(buttonInnerHTML);

    });

}

//Detecting Keyboard Press

     document.addEventListener("keypress",function(event){
	 makeSound(event.key);
	 buttonAnimation(event.key);

    });

   function makeSound(key){
   switch (key) {
    
   case "w":
   var drum1 = new Audio('sounds/drum-1.mp3');
  drum1.play();
    break;
     
   case "a":
   var drum2 = new Audio('sounds/drum-2.mp3');
    drum2.play();
   break;

    case "s":
   var drum3 = new Audio('sounds/drum-3.mp3');
   drum3.play();
   break;

   case "d":
  var drum4 = new Audio('sounds/drum-4.mp3');
  drum4.play();
   break;

   case "j":
   var drum5 = new Audio('sounds/drum-5.mp3');
   drum5.play();
    break;

   case "k":
   var drum6 = new Audio('sounds/drum-6.mp3');
  drum6.play();
  break;

   case "l":
   var drum7 = new Audio('sounds/drum-7.mp3');
    drum7.play();
   break;

  default:console.log(buttonInnerHTML);

  }

}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);

    activeButton.classList.add("animation");

    setTimeout (function(){
        activeButton.classList.remove("animation");
    },100);
}








