let elmClock;

function createClock() {
    elmClock = document.createElement("span");
}

function updateClock(clock) {
    const date = new Date();
    clock.innerHTML = date;
}

createClock();
setInterval(updateClock(elmClock), 1000);

document.body.appendChild(elmClock);