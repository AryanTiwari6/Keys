const key = ["F", "C", "G", "D", "A", "E", "B"];
const mode = ["Lydian", "Major", "Mxolydian", "Dorian", "Minor", "Phrygian", "Locrian"];
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}


function submitform() {
    var note = 0;
    var mode = 0;

    alert("Fetching values");
    var x = document.getElementById("form");

    note = x.elements[0].value;
    mode = x.elements[1].value;

    var text = note + "<br>" + mode;

    document.getElementById("container").innerHTML = text;
}