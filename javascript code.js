// QUESTION 1


var a = parseInt(prompt("Enter first number", 0))
var b = parseInt(prompt("Enter second number", 0))


	if ( a > b )
  	{
    	alert (a)
  	}

	else (a < b )
		{
    	alert(b)
  	}

-----------------------------------


//QUESTION 2


var a1 = parseInt (prompt ("Please enter a number", 0))
var b1 = parseInt (prompt ("Please enter a number ", 0))

if (b1==0)
  {
    alert ("The division by 0 is not allowed")
  }
else 
  {
    alert (a1 / b1)
  }

	  alert (a1 % b1)

-----------------------------------

//QUESTION 3


var x = parseInt(prompt("Enter several numbers (negative to stop)", 0))

var sum = 0

var i = 0

while(x >= 0)
  {
    sum = sum + x;
    i++;
    x = parseInt(prompt("Enter numbers (negative to stop)", 0))
  }

		alert (sum)
    
-----------------------------------

//QUESTION 4


 

var myArray = [] 

var x = parseInt(prompt("please enter number (10 in total)"))

var i = 0

while (myArray.length < 9)
  {
    myArray.push(x) 
    x = parseInt(prompt("please enter number (10 in total)"))
  }

    myArray.push(x) 

var sum = 0

for(var i = 0; i < myArray.length; i = i + 1)
  {
    sum = sum + myArray[i]; 
  }

console.log(`${sum}`)
