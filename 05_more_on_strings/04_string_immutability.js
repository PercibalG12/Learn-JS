/* strings are immutable which means that they cannot be altered onced they are created. This does not mean 
that they can't be changed  just that the individual characters of the  string cannot be changed */ 

var myString = "Hello World";

myString[0] = "J";

/* what i am trying to do is change the h as it points to zero as the index  and change it to  J
 but because strings are immutable then it can't be changed.*/ 



 /* To change it would we have to do  */

 myString = "Jello World"