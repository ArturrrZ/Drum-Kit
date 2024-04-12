document.querySelectorAll("button").forEach(function(button){
    let image=button.currentStyle ;
    console.log(image);
    button.onclick=function(){
            let styles=window.getComputedStyle(button);
            let image_src=styles.backgroundImage.slice(5,-2)
            let list=image_src.split("/");
            let main_part=list[list.length-1];
            let main_part_without_png=main_part.split(".")[0];
            let new_audio= new Audio(`sounds/${main_part_without_png}.mp3`);
            new_audio.play();
    }

    
})

document.addEventListener("keydown",function(event){
    let keys=["w","a","s","d","j","k","l"];
    if (keys.includes(event.key)) {
        document.querySelector(`.${event.key}`).click();
    }
    pressTheKey(event.key);
})

function pressTheKey(key){
    var buton=document.querySelector(`.${key}`);
    buton.classList.add("pressed");
    setTimeout(
        function(){
            buton.classList.remove("pressed");
        }, 100
    );
}

document.querySelector("#title").onmouseover=function(){
    console.log("Your mouse is over the title!")
}

// OLD
// if (this.innerHTML==='k') {
        //     let audio1= new Audio("sounds/crash.mp3");
        //     audio1.play();
        // } 
        // else if (this.innerHTML==='w') {
        //     let tom1= new Audio("sounds/tom-1.mp3");
        //     tom1.play();
        // }