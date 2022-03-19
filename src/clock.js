let elmClock;

function createClock() {
    elmClock = document.createElement("span");
}

function updateClock() {
    const date = new Date();
    elmClock.innerHTML = date;
}

createClock();
setInterval(updateClock, 1000);

document.body.appendChild(elmClock);