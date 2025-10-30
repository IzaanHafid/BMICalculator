let submit = document.getElementById("submit");
let weight = document.getElementById("weight");
let height = document.getElementById("height");
let result = document.getElementById("result");
let body_type = document.getElementById("body_type");

submit.onclick = function() {
    let weightValue = weight.value
    let heightValue = height.value / 100 // converts centimeters into meters

    if (weightValue <= 0 || heightValue <= 0) {
        alert("Please Input Information");
    } else {
        let bmi = weightValue / (heightValue * heightValue);
        let bodyType;
        if (bmi < 18.5) {bodyType = "Underweight";}
        else if (bmi > 18.5 && bmi < 24.9) {bodyType = "Normal";}
        else if (bmi > 25 && bmi < 29.9) {bodyType = "Overweight";}
        else {bodyType = "Obese";}
        result.textContent = `BMI: ${bmi.toFixed(2)}`;
        body_type.textContent = `Body Type: ${bodyType}`
     }
}
