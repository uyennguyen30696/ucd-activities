$(document).ready(function() {

    var firstNumber = 0;
    var secondNumber = 0;
    var operator = "";
    var result = 0;
    var isOperatorChosen = false;
    var isCalculated = false;

    function resetCalculator() {
        var firstNumber = " ";
        var operator = " ";
        var secondNumber = " ";
        var isOperatorChosen = false;
        var isCalculated = false;

    $("#first-number, #second-number, #operator, #result").empty();
    }

    $(".number").on("click", function() {

        // Check if calculation has run, if run
        if (isCalculated) {
            return false;
        }
    
        if (isOperatorChosen === true) {
        secondNumber += this.value;
       
        secondNumber = parseInt(secondNumber);
        $("#second-number").text(secondNumber);
        }

        else {
        firstNumber += this.value;
        firstNumber = parseInt(firstNumber);
        
        $("#first-number").text(firstNumber);
        } 
    });

    $(".operator").on("click", function() {

        if (!firstNumber || isCalculated) {
            return false;
        }
  
        if(this.classList.contains("operator")) {
      
            isOperatorChosen = true;

            // Store the operator value
            operator = this.value;
            // "+" will appear in the browser instead of "plus", and same for other operators
            $("#operator").text($(this).text());
        }
    });

    // Perform operation
    $(".equal").on("click", function() {

        isCalculated = true;
        
        firstNumber = parseInt(firstNumber);
        secondNumber = parseInt(secondNumber);

        if (operator === "plus") {
            result = firstNumber + secondNumber;
        }
        $("#result").text(result);

        if (operator === "minus") {
            result = firstNumber - secondNumber;
        }
        $("#result").text(result);

        if (operator === "times") {
            result = firstNumber * secondNumber;
        }
        $("#result").text(result);

        if (operator === "divide") {
            result = firstNumber / secondNumber;
        }
        $("#result").text(result);

        if (operator === "power") {
            result = Math.pow(firstNumber, secondNumber);
        }
        $("#result").text(result);
        
    });

        $(".clear").on("click", function() {
            resetCalculator();
        });

resetCalculator();

});