let drums = document.querySelectorAll('.drum');


for (let i = 0 ; i < drums.length; i++ )
{
    document.addEventListener('keypress', (e)=> {
        playSound(e.key);

        animation(e.key);
    });
    drums[i].addEventListener("click", ()=> {
        let btn = drums[i].innerHTML;

        playSound(btn);
        
        animation(btn);

    });
}

function playSound(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio('sounds/crash.mp3');
           tom2.play();
           break;
        case "s":
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
           break;
        case "d":
            let tom4 = new Audio('sounds/crash.mp3');
            tom4.play();
           break;
        case "j":
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
           break;
        case "k":
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
           break;
        case "l":
            let snare = new Audio('./sounds/snare.mp3');
            snare.play();
           break;
        
        default:
            console.log('err');
    }
}

function animation(key) {
    let activeBtn = document.querySelector('.' + key);
    activeBtn.classList.add('pressed');
    setTimeout( () => {
        activeBtn.classList.remove('pressed');
    },100);
}