$(document).ready(function() {
  
  //Array that stores all user input
  var calcInput = [""];
  
  //Final result
  var calcOutput = 0;
  
  //String of display
  var stringDisplay;
  
  var calcNumbers = [0,1,2,3,4,5,6,7,8,9];
  var calcOperators = ['/','*','-','+'];
  var calcDecimal = ['.'];
  
  function getValue(input){
    if (calcDecimal.includes(calcInput[calcInput.length-1]===true && input ===".")){
      console.log("Duplicate '.'");
    }
    else if (calcInput.length===1 && calcOperators.includes(input)===false){
      calcInput.push(input);
    }
    else if (calcOperators.includes(calcInput[calcInput.length-1])===false){
      calcInput.push(input);
    }
    else if (calcNumbers.includes(Number(input))){
      calcInput.push(input);
    }
    update();
  }
  
  function update(){
    stringDisplay = calcInput.join('');
        $("#calculatorOutput").html(stringDisplay);
  }
  
  function getTotal(){
   // stringDisplay = calcInput.join('');
    $("#calculatorOutput").html(eval(stringDisplay));
  }
  
  $("button").on("click", function() {
    if(this.id==="btnClear"){
      calcInput = [""];
      update();
    }
    else if(this.id==="btnDel"){
      calcInput.pop();
      update();
    }
    else if(this.id==="btnEqual"){
      getTotal();
    }
    else {
      if (calcInput[calcInput.length-1].indexOf("+","-","*","/")===-1){
        getValue(this.id);
      }
      else {
        getValue(this.id);
      }
    }
  });
                  
});