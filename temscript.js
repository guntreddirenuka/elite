document.getElementById("convertBtn").addEventListener("click", function() {
    var inputTemp = parseFloat(document.getElementById("inputTemp").value);
    var inputUnit = document.getElementById("inputUnit").value;
    var outputUnit = document.getElementById("outputUnit").value;
    
    if (isNaN(inputTemp)) {
        alert("Please enter a valid number for temperature.");
        return;
    }

    var result;
    
    // Celsius to other units
    if (inputUnit === "C") {
        if (outputUnit === "F") {
            result = (inputTemp * 9/5) + 32;
        } else if (outputUnit === "K") {
            result = inputTemp + 273.15;
        } else {
            result = inputTemp;
        }
    }

    // Fahrenheit to other units
    if (inputUnit === "F") {
        if (outputUnit === "C") {
            result = (inputTemp - 32) * 5/9;
        } else if (outputUnit === "K") {
            result = ((inputTemp - 32) * 5/9) + 273.15;
        } else {
            result = inputTemp;
        }
    }

    // Kelvin to other units
    if (inputUnit === "K") {
        if (outputUnit === "C") {
            result = inputTemp - 273.15;
        } else if (outputUnit === "F") {
            result = ((inputTemp - 273.15) * 9/5) + 32;
        } else {
            result = inputTemp;
        }
    }

    document.getElementById("resultTemp").textContent = result.toFixed(2);
});
