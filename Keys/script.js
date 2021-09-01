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
    var note = 0, mode = 0, acci = 0, sign = 0;
    alert("Sending Json");

    var x = document.getElementById("note");
    note = x.elements[0].value - 2;
    acci = x.elements[1].value - 2;
    mode = x.elements[2].value;
    sign = x.elements[3].value;

    alert("Sending Json");

    document.getElementById("result").innerHTML = note;

}