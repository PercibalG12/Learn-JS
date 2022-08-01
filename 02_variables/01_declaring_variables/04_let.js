/* let allows you to declare variables that are limited to the scope of a block statement 
   or expression  on which it is used  ( more on this later)*/

let  firstName = 'Percival' // first name of a person
let lastName = 'James' // last name of a person
let country = 'Jamaica' // country
let city = 'Helsinki' // capital city
let age = 19 // age in years
let isMarried = false // boolean value 

 




// Variables can also be declaring in one line separated by comma
let name = 'Asabeneh', //name of a person
  job = 'teacher',
  live = 'Finland'




  function findX(){
    let x = 1;
   console.log(x)
    {
      let x =2;
      // console.log(x)
    }
  }

  findX()