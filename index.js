var numberOfButton = document.querySelectorAll(".drum").length
for(var i=0;1<numberOfButton;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
         var btnHtml = this.innerHTML
         switch (btnHtml) {
            case "w":
                var audio=new Audio('tom-1.mp3')
                audio.play()
                break;
            case "a":
                var audio = new Audio('tom-2.mp3')
                audio.play()
            case "s":
                var audio = new Audio('tom-3.mp3')
                audio.play()
            case "d":
                var audio = new Audio('tom-4.mp3')
                audio.play()
            case "j":
                var audio = new Audio('snare.mp3')
                audio.play()
            case "k":
                var audio = new Audio('kick-bass.mp3')
                audio.play()
            case "l":
                var audio = new Audio('crash.mp3')
                audio.play()                
                
         
            default:
                break;
         }
       
    });
}

