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
    } else if (isNaN()) {
        return "Not a Number"
    } else {
        return "Is a Number"
    }
}

function formSubmission(document/*, list*/, pilot, copilot, fuelLevel, cargoLevel) { // list  (2nd arg) was removed!!!
    // To do
    // Error check

    // Validate all inputs
    let errorText = "";
    if (validateInput(pilotNameInput) === "Not a Number" || pilotNameInput === "") {
        errorText += "Pilot input invalid\n";
    }

    // copilot
    if (validateInput(copilotNameInput) === "Not a Number" || copilotNameInput === "") {
        errorText += "Copilot input invalid\n";
    }

    // fuelLevel
    if (validateInput(fuelLevelInput) === "Is a Number" || fuelLevelInput === "") {
        errorText += "Fuel Value input invalid\n";
    }

    // cargoLevel
    if (validateInput(cargoMassInput) === "Is a Number" || cargoMassInput === "") {
        errorText += "Cargo Level input invalid\n";
    }

    if (errorText === "") {
        errorText += "All fields are required!\n";
        alert(errorText);
    }



    // Check that the inputs allow for launch
    // https://education.launchcode.org/intro-to-professional-web-dev/assignments/launch-checklist.html#updating-shuttle-requirements

    if (fuelLevelInput < 10000) {
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"; // edits the info title (needs to be red if fails, green if ready for launch)
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch." // <10,000
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("faultyItems").style.visibility = "visible";
    }

    if (cargoMassInput > 10000) {
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"; // edits the info title (needs to be red if fails, green if ready for launch)
        document.getElementById("cargoStatus").innerHTML = "Too much mass for launch." // > 10,000
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("faultyItems").style.visibility = "visible";
    }

    if ("no problems") {
        document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch"; // edits the info title (needs to be red if fails, green if ready for launch)
        document.getElementById("launchStatus").style.color = "green"; // edits the info color (needs to be red if fails, green if ready for launch)
        document.getElementById("faultyItems").style.visibility = "hidden";
    }



}

async function myFetch() {
    let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
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
