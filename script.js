let displayCountEl = document.getElementById("display-count-el");
let displaySaveEl = document.getElementById("display-save-el");

let count = 0;

function increment() {
    count++;
    displayCountEl.textContent = count;
}

function save() {
    displaySaveEl.textContent += count + " - ";
    count = 0;
    displayCountEl.textContent = count;
}