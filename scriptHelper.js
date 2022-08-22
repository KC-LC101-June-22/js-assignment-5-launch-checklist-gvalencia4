// Write your helper functions here!
require('isomorphic-fetch');

// Fetch planet JSON file
async function myFetch() {
    let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
    });
    return planetsReturned;
}

// Take as a argument a list of planets, return one of them at random
function pickPlanet(planets) {
    i = Math.floor(Math.random() * planets.length);

    return planets[i];
}

// Use data fetched from JSON file and a planet randomly picked from that file to fill in the Mission Target
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
                <img src="${imageUrl}">`;

    document.getElementById("missionTarget").innerHTML = innerHTMLValue;
    return
}

// Return type of input
function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number"
    } else {
        return "Is a Number"
    }
}

// Input error handling and DOM updates on form submission
function formSubmission(document/*, list*/, pilot, copilot, fuelLevel, cargoLevel) { // list  (2nd arg) was removed!!!

    // Validate all inputs
    let errorText = "";

    // pilot
    if (validateInput(pilot) === "Is a Number" || pilot === "") {
        errorText += "Pilot input invalid\n";
    }

    // copilot
    if (validateInput(copilot) === "Is a Number" || copilot === "") {
        errorText += "Copilot input invalid\n";
    }

    // fuelLevel
    if (validateInput(fuelLevel) === "Not a Number" || fuelLevel === "") {
        errorText += "Fuel Value input invalid\n";
    }

    // cargoLevel
    if (validateInput(cargoLevel) === "Not a Number" || cargoLevel === "") {
        errorText += "Cargo Level input invalid\n";
    }

    // Display errors if they exist
    if (!(errorText === "")) {
        alert(errorText);
        console.log(errorText);
        return
    }

    // Check that the inputs allow for launch
    // https://education.launchcode.org/intro-to-professional-web-dev/assignments/launch-checklist.html#updating-shuttle-requirements

    // Set Names in Faulty Items
    // <li id="pilotStatus" data-testid="pilotStatus">Pilot Ready</li>
    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
    document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilot} is ready for launch`;

    let fuelLevelMin = 10000;
    let cargoLevelMax = 10000;

    // Check Fuel Level
    if (fuelLevel < fuelLevelMin) {
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"; // edits the info title (needs to be red if fails, green if ready for launch)
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch."; // <10,000
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("faultyItems").style.visibility = "visible";
    } else {
        document.getElementById("fuelStatus").innerHTML = "Fuel level OK"; // >10,000
    }

    // Check Cargo Mass
    if (cargoLevel > cargoLevelMax) {
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"; // edits the info title (needs to be red if fails, green if ready for launch)
        document.getElementById("cargoStatus").innerHTML = "Cargo weight too high for launch." // > 10,000
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("faultyItems").style.visibility = "visible";
    } else {
        document.getElementById("cargoStatus").innerHTML = "Cargo weight OK" // > 10,000
    }

    // Inputs ok and ready for launch
    if (fuelLevel >= fuelLevelMin && cargoLevel <= cargoLevelMax) {
        document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch"; // edits the info title (needs to be red if fails, green if ready for launch)
        document.getElementById("launchStatus").style.color = "green"; // edits the info color (needs to be red if fails, green if ready for launch)
        document.getElementById("faultyItems").style.visibility = "hidden";
    }
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;