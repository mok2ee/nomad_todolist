function createClock() {
    clock = document.createElement("span");
    return clock;
}

function updateClock() {
    const date = new Date();
    console.log(date);
}

const elmClock = createClock();
elmClock.innerHtml = "test";

setInterval(updateClock, 1000);
document.body.appendChild(elmClock);