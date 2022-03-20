const geo = {};

function createGeo() {
    geo.div = document.createElement("div");
    geo.span = document.createElement("span");

    geo.div.appendChild(geo.span);
    document.body.appendChild(geo.div);

    geo.div.classList.add(GEO_CLASSNAME);

    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
}

function onGeoOk(pos) {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const city = data.name;
        const weather = data.weather[0].main;
        
        geo.div.innerHTML = `${city}, ${weather}`;
    });

}

function onGeoErr(){

}