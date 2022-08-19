// Write your JavaScript code here!



window.addEventListener("load", function () {


    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        // Destination Code
        listedPlanets = result;
        planet = pickPlanet(listedPlanets);
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);

        // call when button is clicked: formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
        let form = document.querySelector("form");
        form.addEventListener("submit", function (event) {
            let usernameInput = document.querySelector("input[name=username]");
            let teamName = document.querySelector("input[name=team]");
            // if (true) {
            alert("All fields are required!");
            // stop the form submission
            event.preventDefault();
            //}
        });

    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })

});


// window.addEventListener("load", function() {
//     let form = document.querySelector("form");
//     form.addEventListener("submit", function(event) {
//        let usernameInput = document.querySelector("input[name=username]");
//        let teamName = document.querySelector("input[name=team]");
//        if (usernameInput.value === "" || teamName.value === "") {
//         alert("All fields are required!");
//         // stop the form submission
//         event.preventDefault();
//        }
//     });
//  });