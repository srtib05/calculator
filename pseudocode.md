Initial pseudocode

//MATH FORMULAS//
FUNCTION sum (Firstnumber, secondnumber)
RETURN firstnumber + secondnumber
FUNCTION substract (Firstnumber, secondnumber)
RETURN firstnumber - secondnumber
FUNCTION multiply (Firstnumber, secondnumber)
RETURN firstnumber * secondnumber
FUNCTION divide (Firstnumber, secondnumber)
RETURN firstnumber /



//BUTTON SELECTION//
DECLARE Firstnumber
DECLARE operatortype
DECLARE secondnumber
SET firstchoice to false
SET operatorchoice to false
SET secondchoice to false

SELECT buttons container in dom
 
WHEN user clicks button
CHECK button class
IF operatorchoice is false AND class is digit
APPEND button.data-number to firstnumber
CALL changedisplay()
SET firstchoice to true
 
ELSE IF  firstchoice is true AND class is operator AND secondchoice is false
SET operatortype to button.data-operator
CALL changedisplay()
SET operatorchoice to true
 
ELSE IF operatorchoice is true AND class is digit
APPEND button.data-number to secondnumber.
CALL changedisplay()
SET secondchoice to true
 
ELSE IF secondchoice is true AND class is equality
CLEAR display
IF operatortype is +
Sum(firstnumber,secondnumber)
CHANGE display text content to sum()
ELSE IF operatortype is +
substract(firstnumber,secondnumber)
CHANGE display text content to substract()
ELSE IF operatortype is +
multiply(firstnumber,secondnumber)
CHANGE display text content to multiply()
ELSE IF operatortype is +
divide(firstnumber,secondnumber)
CHANGE display text content to divide()

FUNCTION changedisplay()
SELECT display in dom
CHANGE display text content to (firstnumber + operatortype + secondnumber)

