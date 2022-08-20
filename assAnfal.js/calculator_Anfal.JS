window.alert("welcome to My assignment !") 

// resultScreenValue is a variable which used for clearing the screan automatic if resultScreenValue is true that mean it has value
// then the input resultScreen text should be clear and it has "TRUE" initial value beacuse the initial value Of the input button is 0
var resultScreenValue=true;

//for displaying in the resultScreen input when the any buttons  is pressed and add the new value to the pervies one
function display(valueDisplayed){
	
	// this condition is to check resultScreenValue Boolean variable value if it's true we should clear the screen 
	if (resultScreenValue) {
		clearScreen();
	} 
	// then add the value of the button pressed to input resultScreen
	 document.getElementById('resultScreen').value += valueDisplayed;
	}
//this function is called when the equal button pressed
function solve(){
	
	//https://www.tutorialsteacher.com/javascript/javascript-error-handling 
	try
	{
		var x = document.getElementById('resultScreen').value;
		
		/*If the argument is an expression, eval() evaluates the expression. 
		  If the argument is one or more JavaScript statements, eval() executes the statements.
		*/
		
		
		var y = eval(x);
		
		// put the result into input 
		document.getElementById('resultScreen').value = eval(x);
	}
	//when error catch or occours in try block then the catch block executed 
	catch(ex)
	{
		alert(ex);
		document.getElementById('resultScreen').value = 'Invalid Inputs ';
	}
	
	// finally block is executed  in all status and it give the Boolean variable resultScreenValue true value this mean it has value
	finally{
		resultScreenValue=true;
	}
}

function clearScreen(){
	document.getElementById('resultScreen').value = '';
//Give the Boolean variable resultScreenValue false value this mean it has not value
	resultScreenValue=false;
}