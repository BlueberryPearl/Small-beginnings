//Part 1: Generating 4 random colours into an array

function colourGenerator() {
    let hex = "0123456789ABCDEF";
    let colour = "";
    for (var i = 0; i < 6; i++) {
        colour = colour + hex[Math.floor(Math.random() * 16)];
    }
    return "#" + colour;
}

function getHexCodes() {
    var hexCodes = [];

    for (i = 0; i < 4; i++) {
        let colour = colourGenerator();
        while (hexCodes.includes(colour)) {
            colour = colourGenerator();
        }
        hexCodes.push(colour);
    }
    return hexCodes;
}

//Part 2: Displaying the colours from part 1 and their respective hex codes

function assignColours() {
    let codes = getHexCodes()
    let boxes = document.getElementsByClassName("box");
    let names = document.getElementsByClassName("Hex-codes");

    for (i = 0; i < 4; i++) {
        boxes[i].style.backgroundColor = codes[i];
        names[i].innerHTML = codes[i];
    }

}

// Part 3: Choose my time

function timeGenerator() {
    var times = ["Rainy day", "Rainy night", "Morning", "Late afternoon", "Windy afternoon", "Summer day", "Summer evening", "Winter night", "Winter morning", "Spring afternoon", "Dawn", "Noon", "Afternoon", "Evening", "Night", "Dusk", "Snowy day", "Foggy morning", "Foggy evening", "Cloudy day", "Dust storm", "Icy morning", "Icy afternoon", "Lightning in the day", "Lightning at night", "Starry night", "Full moon evening", "Sunny morning", "Sunny afternoon", "Cloudy evening", "Thunderstorm", "Overcast", "Hot sunny day"];
    var number = Math.floor(Math.random() * times.length);

    var timing = times[number];
    return timing;
}


function getTime() {
    var theTime = document.getElementById("Time-card");
    let currentTime = theTime.innerText;
    let newTime = timeGenerator();

    while (currentTime == newTime) {
        newTime = timeGenerator();
    }
    theTime.innerText = newTime;
}

//Part 4: Choose my place.
function placeGenerator() {
    let place = ["Mountain top", "Riverside", "Farm", "Cafe", "Library", "Bedroom", "Garden", "Field", "Beach", "Forest", "Kitchen", "Airport", "Desert", "Space", "Train station", "Bathroom", "Greenhouse", "Park", "Swimming pool", "Waterfall", "Snowy mountain", "Cave", "Ruins", "Volcano", "City streets", "Balcony", "Shed", "Cabin", "Lake", "Hallway", "Toy shop", "Gallery", "Bridge", "Magic room", "Cliff", "Under water", "Port", "Front yard", "Bar", "Mural", "Staircase", "Abandonned building", "Warehouse", "Flower field", "Theatre", "Laboratory", "Wedding reception", "Church", "Cemetary", "Aquarium", "Boat", "Tree House", "Tree top"];
    let placeNum = Math.floor(Math.random() * place.length);
    let randomPlace = place[placeNum];
    return randomPlace;
}
function getPlace() {
    let place = document.getElementById("Place-card");
    let currentPlace = place.innerText
    let newPlace = placeGenerator()
    while (currentPlace == newPlace) {
        newPlace = placeGenerator();
    }
    place.innerText = newPlace;
}

// Part 5: Copying the hex code when clicking on the box.


function copyHex1() {
    let copyText = document.getElementById("First colour");
    let text = copyText.innerText;
    navigator.clipboard.writeText(text);

    var x = document.getElementById("snackbar");
    x.className = "show"
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 1000)

}

function copyHex2() {
    let copyText = document.getElementById("Second colour");
    let text = copyText.innerText;
    navigator.clipboard.writeText(text);

    var x = document.getElementById("snackbar");
    x.className = "show"
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 1000)

}

function copyHex3() {
    let copyText = document.getElementById("Third colour");
    let text = copyText.innerText;
    navigator.clipboard.writeText(text);

    var x = document.getElementById("snackbar");
    x.className = "show"
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 1000)

}

function copyHex4() {
    let copyText = document.getElementById("Fourth colour");
    let text = copyText.innerText;
    navigator.clipboard.writeText(text);

    var x = document.getElementById("snackbar");
    x.className = "show"
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 1000)

}
