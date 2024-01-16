n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
    
    var key=this.innerHTML;
    buttonPressed(key);
    buttonAnimation(key);
   
});
}
document.addEventListener("keypress",function(event){
 buttonPressed(event.key);
 buttonAnimation(key);
 
});

function buttonPressed(key){
    var audio;
    switch(key){
        case "w":
            audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        
        case "a":
                audio=new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
        case "s":
              audio=new Audio("sounds/snare.mp3");
              audio.play();
              break;
        case "d":
                audio=new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
        case "j":
            audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
    }
}

function buttonAnimation(key){
    var activeButton=document.querySelector("."+ key);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },2000);
}