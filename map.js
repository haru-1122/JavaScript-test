const stages =document.getElementsByClassName("stage");
console.log(stages);

let increasing = true;
let color = 0;
let target =0;

function animate() {
    if (increasing) {
        color += 1;
     } else {
        color -= 1;
    }

    if (color < 20){
        increasing =true;
    } else if (color > 100){
        increasing = false;
    }

    stages[target].style.backgroundColor = `rgb(200,50,${color})`;
    requestAnimationFrame(animate);
}

addEventListener("click",() => {
    stages[target].style.backgroundColor = "#000";

    target += 1;
    if (target >= 4){
        target = 0;
    }
}
)

animate()