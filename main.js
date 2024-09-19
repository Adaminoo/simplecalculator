function doMath() {
    let opin = document.getElementById("selectedoperator");
    let operator = opin.value;

    let in1 = document.getElementById("input1");
    let num1 = Number(in1.value);
    let in2 = document.getElementById("input2");
    let num2 = Number(in2.value);

    let answer;

    if (operator == "+") {
        answer = num1 + num2;
        document.getElementById("solution").innerHTML = answer;
    } else if (operator == "-") {
        answer = num1 - num2;
        document.getElementById("solution").innerHTML = answer;
    } else if (operator == "*") {
        answer = num1 * num2;
        document.getElementById("solution").innerHTML = answer;
    } else if (operator == "/") {
        answer = num1 / num2;
        document.getElementById("solution").innerHTML = answer;
    } else if (operator == "%") {
        answer = num1 % num2;
        document.getElementById("solution").innerHTML = answer;
    }
}