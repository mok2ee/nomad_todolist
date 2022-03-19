function createClock() {
    const elmClock = document.createElement("span");
}

function updateClock(clock) {
    const date = new Date();
    clock.innerHTML = date;
}

createClock();
setInterval(updateClock, 1000);

document.body.appendChild(elmClock);