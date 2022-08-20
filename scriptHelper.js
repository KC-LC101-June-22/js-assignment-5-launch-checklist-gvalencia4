// Write your helper functions here!
require('isomorphic-fetch');

// Fetch planet JSON file UNCOMMENT WITH INTERNET
async function myFetch() {
//     let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
//         return response.json();
//     });
//     return planetsReturned;
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
    } else if (isNaN()) {
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
    if (validateInput(pilot) === "Not a Number" || pilot === "") {
        errorText += "Pilot input invalid\n";
    }

    // copilot
    if (validateInput(copilot) === "Not a Number" || copilot === "") {
        errorText += "Copilot input invalid\n";
    }

    // fuelLevel
    if (validateInput(fuelLevel) === "Is a Number" || fuelLevel === "") {
        errorText += "Fuel Value input invalid\n";
    }

    // cargoLevel
    if (validateInput(cargoLevel) === "Is a Number" || cargoLevel === "") {
        errorText += "Cargo Level input invalid\n";
    }

    // Display errors if they exist
    if (!errorText === "") {
        errorText += "All fields are required!\n";
        alert(errorText);
        // break?
    }

    // Check that the inputs allow for launch
    // https://education.launchcode.org/intro-to-professional-web-dev/assignments/launch-checklist.html#updating-shuttle-requirements

    // Fuel level is too low
    if (fuelLevel < 10000) {
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"; // edits the info title (needs to be red if fails, green if ready for launch)
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch." // <10,000
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("faultyItems").style.visibility = "visible";
    }

    // Cargo mass is too high
    if (cargoLevel > 10000) {
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"; // edits the info title (needs to be red if fails, green if ready for launch)
        document.getElementById("cargoStatus").innerHTML = "Too much mass for launch." // > 10,000
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("faultyItems").style.visibility = "visible";
    }

    // Inputs ok and ready for launch
    if (fuelLevel > 10000 && cargoLevel < 10000) {
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