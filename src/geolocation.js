const geo = {};

function createGeo() {
    geo.div = document.createElement("div");
    geo.span = document.createElement("span");

    geo.div.appendChild(geo.span);
    document.body.appendChild(geo.div);

    geo.div.classList.add(GEO_CLASSNAME);
}