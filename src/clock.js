function createClock() {
    clock = document.createElement("span");
    return clock;
}

function updateClock(clock) {
    const date = new Date();
    clock.innerHTML = date;
    console.log(date);
}

const elmClock = createClock();
setInterval(updateClock(elmClock), 1000);
document.body.appendChild(elmClock);