window.addEventListener("load", function () {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {

        // Form Submission Code
        let form = document.querySelector("form");
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            let pilotNameInput = document.querySelector("input[name=pilotName]").value;
            let copilotNameInput = document.querySelector("input[name=copilotName]").value;
            let fuelLevelInput = document.querySelector("input[name=fuelLevel]").value;
            let cargoMassInput = document.querySelector("input[name=cargoMass]").value;

            formSubmission(document, pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput); // list?
        });

    //}).then(function (result) {
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        // Destination Code
        listedPlanets = result;
        planet = pickPlanet(listedPlanets);
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    });
});