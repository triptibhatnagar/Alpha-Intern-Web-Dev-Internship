// Length Converter
document.getElementById("length-convert-btn").addEventListener("click", function() {
    const lengthInput = document.getElementById("length-input").value;
    const lengthUnitFrom = document.getElementById("length-unit-from").value;
    const lengthUnitTo = document.getElementById("length-unit-to").value;
    let result = 0;
    switch (lengthUnitFrom) {
        case "meter":
            switch (lengthUnitTo) {
                case "kilometer":
                    result = lengthInput / 1000;
                    break;
                case "centimeter":
                    result = lengthInput * 100;
                    break;
                case "millimeter":
                    result = lengthInput * 1000;
                    break;
                case "inch":
                    result = lengthInput * 39.37;
                    break;
                case "foot":
                    result = lengthInput * 3.2808;
                    break;
                case "yard":
                    result = lengthInput * 1.0936;
                    break;
                default:
                    result = lengthInput;
            }
            break;
        case "kilometer":
            switch (lengthUnitTo) {
                case "meter":
                    result = lengthInput * 1000;
                    break;
                case "centimeter":
                    result = lengthInput * 100000;
                    break;
                case "millimeter":
                    result = lengthInput * 1000000;
                    break;
                case "inch":
                    result = lengthInput * 39370;
                    break;
                case "foot":
                    result = lengthInput * 3280.8;
                    break;
                case "yard":
                    result = lengthInput * 1093.6;
                    break;
                default:
                    result = lengthInput;
            }
            break;
        case "centimeter":
            switch (lengthUnitTo) {
                case "meter":
                    result = lengthInput / 100;
                    break;
                case "kilometer":
                    result = lengthInput / 100000;
                    break;
                case "millimeter":
                    result = lengthInput * 10;
                    break;
                case "inch":
                    result = lengthInput * 0.3937;
                    break;
                case "foot":
                    result = lengthInput * 0.032808;
                    break;
                case "yard":
                    result = lengthInput * 0.010936;
                    break;
                default:
                    result = lengthInput;
            }
            break;
        case "millimeter":
            switch (lengthUnitTo) {
                case "meter":
                    result = lengthInput / 1000;
                    break;
                case "kilometer":
                    result = lengthInput / 1000000;
                    break;
                case "centimeter":
                    result = lengthInput / 10;
                    break;
                case "inch":
                    result = lengthInput * 0.03937;
                    break;
                case "foot":
                    result = lengthInput * 0.0032808;
                    break;
                case "yard":
                    result = lengthInput * 0.0010936;
                    break;
                default:
                    result = lengthInput;
            }
            break;
        case "inch":
            switch (lengthUnitTo) {
                case "meter":
                    result = lengthInput / 39.37;
                    break;
                case "kilometer":
                    result = lengthInput / 39370;
                    break;
                case "centimeter":
                    result = lengthInput / 0.3937;
                    break;
                case "millimeter":
                    result = lengthInput / 0.03937;
                    break;
                case "foot":
                    result = lengthInput / 12;
                    break;
                case "yard":
                    result = lengthInput / 36;
                    break;
                default:
                    result = lengthInput;
            }
            break;
        case "foot":
            switch (lengthUnitTo) {
                case "meter":
                    result = lengthInput / 3.2808;
                    break;
                case "kilometer":
                    result = lengthInput / 3280.8;
                    break;
                case "centimeter":
                    result = lengthInput / 0.032808;
                    break;
                case "millimeter":
                    result = lengthInput / 0.0032808;
                    break;
                case "inch":
                    result = lengthInput * 12;
                    break;
                case "yard":
                    result = lengthInput / 3;
                    break;
                default:
                    result = lengthInput;
            }
            break;
        case "yard":
            switch (lengthUnitTo) {
                case "meter":
                    result = lengthInput / 1.0936;
                    break;
                case "kilometer":
                    result = lengthInput / 1093.6;
                    break;
                case "centimeter":
                    result = lengthInput / 0.010936;
                    break;
                case "millimeter":
                    result = lengthInput / 0.0010936;
                    break;
                case "inch":
                    result = lengthInput * 36;
                    break;
                case "foot":
                    result = lengthInput * 3;
                    break;
                default:
                    result = lengthInput;
            }
            break;
        default:
            result = lengthInput;
    }
    document.getElementById("length-result").innerText = result.toFixed(2) + " " + lengthUnitTo;
});

// Weight Converter
document.getElementById("weight-convert-btn").addEventListener("click", function() {
    const weightInput = document.getElementById("weight-input").value;
    const weightUnitFrom = document.getElementById("weight-unit-from").value;
    const weightUnitTo = document.getElementById("weight-unit-to").value;
    let result = 0;
    switch (weightUnitFrom) {
        case "kilogram":
            switch (weightUnitTo) {
                case "gram":
                    result = weightInput * 1000;
                    break;
                case "ounce":
                    result = weightInput * 35.274;
                    break;
                case "pound":
                    result = weightInput * 2.20462;
                    break;
                default:
                    result = weightInput;
            }
            break;
        case "gram":
            switch (weightUnitTo) {
                case "kilogram":
                    result = weightInput / 1000;
                    break;
                case "ounce":
                    result = weightInput / 28.35;
                    break;
                case "pound":
                    result = weightInput / 453.592;
                    break;
                default:
                    result = weightInput;
            }
            break;
        case "ounce":
            switch (weightUnitTo) {
                case "kilogram":
                    result = weightInput / 35.274;
                    break;
                case "gram":
                    result = weightInput * 28.35;
                    break;
                case "pound":
                    result = weightInput / 16;
                    break;
                default:
                    result = weightInput;
            }
            break;
        case "pound":
            switch (weightUnitTo) {
                case "kilogram":
                    result = weightInput / 2.20462;
                    break;
                case "gram":
                    result = weightInput * 453.592;
                    break;
                case "ounce":
                    result = weightInput * 16;
                    break;
                default:
                    result = weightInput;
            }
            break;
        default:
            result = weightInput;
    }
    document.getElementById("weight-result").innerText = result.toFixed(2) + " " + weightUnitTo;
});