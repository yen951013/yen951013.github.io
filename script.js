import * as algorithm from './module/algorithm.mjs';
import { randomNums } from './module/animation.mjs';
import { generate } from './module/animation.mjs';

async function Sort() {
    config.isAborted = false;
    config.complete = false;
    await algorithm.sortMethod[ config.sortMethodNumber ]();
    
    config.complete = true;
    pause();
}

randomNums();
generate();

// ========================== Panel ==========================
// --------------- sort ------------
const sortAlgorithm = document.getElementById("SortAlgorithm");
const Title = document.getElementById("Title");

sortAlgorithm.addEventListener("change", () => {
    config.sortMethodNumber = sortAlgorithm.value;
    Title.innerHTML = sortAlgorithm.options[ sortAlgorithm.selectedIndex ].text;
    config.isAborted = true;
});
// -------------- delay ----------------
const delay = document.getElementById("delay");
var root = document.querySelector(':root');

delay.addEventListener("change", () => {
    config.delay = delay.value;
    root.style.setProperty('--speed', `${delay.value / 1000}s`);
});

// -------------- toggle --------------
const toggle = document.getElementById("togglePlay");
const icon = toggle.firstElementChild;
console.log(icon);
toggle.addEventListener("click", () => {
    if (config.isPaused == true) {
        play();
    } else {
        pause();        
    }
});

function play() {
    config.isPaused = false;
    icon.src = "./icon/pause.svg";

    if (config.complete == true) {
        generate();
        Sort();
    }
}
function pause() {
    config.isPaused = true;
    icon.src = "./icon/play.svg";
}
// --------------- data ---------------
const data = document.getElementById("data");
data.addEventListener("change", () => {
    config.isAborted = true;
});

const size = document.getElementById("size");
size.addEventListener("change", () => {
    config.size = size.value;
});

const random = document.getElementById("Random");
random.addEventListener("click", () => {
    randomNums();

    config.isAborted = true;
    generate();
});