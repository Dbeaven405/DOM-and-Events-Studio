// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    const takeoff = document.getElementById("takeoff");
    const flightstatus = document.getElementById("flightStatus")
    const shuttlebackground = document.getElementById("shuttleBackground")
    const shuttleheight = document.getElementById("spaceShuttleHeight")
    const land = document.getElementById("landing")
    const abortmission = document.getElementById("missionAbort")

    takeoff.addEventListener("click", function (event) {
        let response = confirm("Confirm that the shuttle is ready for takeoff.")
        if (response) {
            flightstatus.innerHTML = "Shuttle in flight"
            shuttlebackground.style.backgroundColor = "blue"
            shuttleheight.innerHTML = "10,000"
        }

    })

    land.addEventListener("click", function (event) {
        alert("The shuttle is landing. Landing gear engaged.")
        flightstatus.innerHTML = "The shuttle has landed."
        shuttlebackground.style.backgroundColor = "green"
        shuttleheight.innerHTML = "0"
    })

    abortmission.addEventListener("click", function (event) {
        let response = confirm("Confirm that you want to abort the mission.")
        if (response) {
            flightstatus.innerHTML = "Mission aborted."
            shuttlebackground.style.backgroundColor = "green"
            shuttleheight.innerHTML = "0"
        }
    })


}

window.addEventListener("load", init);