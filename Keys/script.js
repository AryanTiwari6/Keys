const key = ["F", "C", "G", "D", "A", "E", "B"];
const mode = ["Lydian", "Major", "Mxolydian", "Dorian", "Minor", "Phrygian", "Locrian"];
const acci = ["flat", "natural", "sharp"];
const acci_sym = ["b", "", "#"];

function submitform() {
    var k = 0, m = 0, a = 0, s = 0;
    var result = "";

    var x = document.getElementById("note");
    var flag = true;

    if (x.elements[0].value != "title" && x.elements[1].value != "title" && x.elements[2].value != "title" && x.elements[3].value != "title") {
        result = "Please leave one filed empty to find out it's value.";
        flag = false;
    }

    if (flag) {
        for (let i = 0; i < 4; i++) {
            if (x.elements[i].value == "title") {
                for (let j = i + 1; j < 4; j++) {
                    if (x.elements[j].value == "title") {
                        result = "Please select at least 3 of the 4 given fields";
                        flag = false;
                        break;
                    }
                }
            }
        }
    }


    if (flag) {
        k = x.elements[0].value - 2;
        a_index = x.elements[1].value - 2;
        m = x.elements[2].value - 2;
        s = x.elements[3].value - 7;
        a = a_index * 7;

        if (x.elements[3].value == "title") {
            s = k + a - m;
            result = "The key Signature of " + key[k + 1] + acci_sym[a_index + 1] + " " + mode[m + 1] + " is " + Math.abs(s) + " " + acci[Math.sign(s) + 1];

            if (Math.abs(s) > 6) {
                var sign = Math.sign(s);
                s = sign * (Math.abs(s) - 12);
                result += " or simply it is equivalent to " + Math.abs(s) + " " + acci[Math.sign(s) + 1];
            }
        }
        if (x.elements[2].value == "title") {
            m = k + a - s;
            result = "This key is in the mode of " + mode[m + 1];
        }
        if (x.elements[0].value == "title") {
            k = s + m - a;
            result = "This is the key of " + key[k + 1];
        }
        if (x.elements[1].value == "title") {
            a = s + m - k;
            result = "It's " + acci[((a / 7) + 1)];
        }
    }

    document.getElementById("result").innerHTML = result;

}