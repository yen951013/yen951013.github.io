var Display = document.getElementById("Display");
var data = document.getElementById("data");
var root = document.querySelector(':root');
var index = [];
var blocks;

function clear() {
    Display.innerHTML = "";
}

export function generate() {
    clear();

    config.nums = JSON.parse(data.value);
    let n = config.nums.length;

    root.style.setProperty('--width', `${800 / n - 2}px`);
    
    for (let i = 0; i < config.nums.length; ++i) {
        let value = config.nums[i];

        const block = document.createElement("div");
        block.classList.add("block");
        block.style.height = `${value * 5}px`;
        block.style.left = `${i * (800 / config.nums.length)}px`;
        
        if (n <= 20) {
            const blockLabel = document.createElement("span");
            blockLabel.classList.add("value");
            blockLabel.innerHTML = value;
            block.appendChild(blockLabel);
        }

        Display.appendChild(block);
    }

    blocks = document.getElementsByClassName("block");
    index = [];
    for (let i = 0; i < config.nums.length; ++i) {
        index[i] = i;
    }
}

export function randomNums() {
    let S = "[";
    for (let i = 0; i < config.size; ++i) {
        S += Math.floor(Math.random() * 99) + 1;

        if (i != config.size - 1) {
            S += ",";
        }
    }
    S += "]";
    data.value = S;
}

export function compare(a, b, delay) {
    color(a, "#e22");
    color(b, "#e22");
    
    setTimeout(() => {
        color(a, "#33c1ff");
        color(b, "#33c1ff");
    }, config.delay);

    return config.nums[a] > config.nums[b];
}

function color(i, color) {
    blocks[index[i]].style.backgroundColor = color;
}

export function swap(a, b) {
    [config.nums[a], config.nums[b]]
    = [config.nums[b], config.nums[a]];
    
    [blocks[index[a]].style.left, blocks[index[b]].style.left]
    = [blocks[index[b]].style.left, blocks[index[a]].style.left];
    
    [index[a], index[b]]
    = [index[b], index[a]];
}

export function complete(i) {
    setTimeout(() => {
        color(i, "#2f2");
    }, config.delay);
}