// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our missionTarget div.
   innerHTMLValue = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
   `;

   document.getElementById("missionTarget").innerHTML = innerHTMLValue;

   return
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (is(Nan)) {
        return "Not a Number"
    } else {
        return "Is a Number"
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let errorText = "";
    // pilot
    if (!validateInput(pilot) === "Not a Number") {
        errorText += "Pilot input invalid\n";
    }

    // copilot
    if (validateInput(copilot) === "Not a Number") {
        errorText += "Copilot input invalid\n";
    }

    // fuelLevel
    if (validateInput(fuelLevel) === "Is a Number") {
        errorText += "Fuel Value input invalid\n";
    }

    // cargoLevel
    if (validateInput(cargoLevel) === "Is a Number") {
        errorText += "Cargo Level input invalid\n";
    }

    if (errorText === "") {
        // submit form
    } else {
        // display warnings in box
        // prevent page refresh
    }
}

async function myFetch() {
    let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;

// model:


//     fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
//         response.json().then(function (json) {
//             const destination = document.getElementById("destination");
//             let index = 0;
//             destination.addEventListener("click", function () {
//                 destination.innerHTML = `
//                 <div>
//                     <h3>Planet ${json[index].name}</h3>
//                     <img src=${json[index].image} height=250></img>
//                 </div>
//             `;
//             index = (index + 1) % json.length;
//             });
//         });
//     });





}

// Take as a argument a list of planets, return at random one of them
function pickPlanet(planets) {
    i = Math.floor(Math.random() * planets.length);
    
    return planets[i];
}
planet = pickPlanet(planets);
addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
