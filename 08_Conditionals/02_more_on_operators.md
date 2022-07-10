# The equality operator (==)

The equality operator compares two values and returns true if they're equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left.

```js
function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}
```

- If myVal is equal to 10, the equality operator returns true, so the code in the curly braces will execute, and the function will return Equal. Otherwise, the function will return Not Equal. In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. This is known as Type Coercion. Once it does, however, it can compare terms as follows:

```js
1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true
```



# Comparison with the Strict Equality Operator (===)

- Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

- If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

- Examples

```js
3 ===  3  // true
3 === '3' // false
```

- 3 ===  3  // true
3 === '3' // false



# Comparison with the Inequality Operator

- The inequality operator (!=) is the opposite of the equality operator. It means not equal and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.

- Examples 

```js
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);


1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false
```



# Comparison with the Strict Inequality Operator

- The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. The strict inequality operator will not convert data types.

- Examples

```js

function testStrictNotEqual(val) {
  if (val!==17) {
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

3 !==  3  // false
3 !== '3' // true
4 !==  3  // true
```



# Comparison with the Greater Than Operator

- The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.

- Like the equality operator, the greater than operator will convert data types of values while comparing.

- Examples
```js

function testGreaterThan(val) {
  if (val >100) {  // Change this line
    return "Over 100";
  }

  if (val >10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false
```


# Comparison with the Greater Than Or Equal To Operator


- The greater than or equal to operator (>=) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false.

- Like the equality operator, the greater than or equal to operator will convert data types while comparing.

- Examples
```js

function testGreaterOrEqual(val) {
  if (val >= 20) {  
    return "20 or Over";
  }

  if (val >= 10) {  
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false
```



# Comparison with the Less Than Operator

- The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. Like the equality operator, the less than operator converts data types while comparing.

- Examples
```js 

function testLessThan(val) {
  if (val < 25) {  
    return "Under 25";
  }

  if (val< 55) {  
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

 2   < 5 // true
'3' < 7 // true
 5   < 5 // false
 3   < 2 // false
'8' < 4 // false
```


# Comparison with the Less Than Or Equal To Operator

- The less than or equal to operator (<=) compares the values of two numbers. If the number to the left is less than or equal to the number to the right, it returns true. If the number on the left is greater than the number on the right, it returns false. Like the equality operator, the less than or equal to operator converts data types.

- Examples
```js 

function testLessOrEqual(val) {
  if (val <=12) {  
    return "Smaller Than or Equal to 12";
  }

  if (val  <=24) {  
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

 4   <= 5 // true
'7' <= 7 // true
 5   <= 5 // true
 3   <= 2 // false
'8' <= 4 // false

```


# Comparisons with the Logical And Operator

- Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.

- The same effect could be achieved by nesting an if statement inside another if:
```js
if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
```
- will only return Yes if num is greater than 5 and less than 10. The same logic can be written as:
```js
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
```
```js
function testLogicalAnd(val) {
  
  if (val <= 50 && val >= 25) {
   
      return "Yes";
  }


  return "No";
}

testLogicalAnd(10);
```



#  Comparisons with the Logical Or Operator

-  The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

- The logical or operator is composed of two pipe symbols: (||). This can typically be found between your Backspace and Enter keys.

- The pattern below should look familiar from prior waypoints:
```js
if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
```
will return Yes only if num is between 5 and 10 (5 and 10 included). The same logic can be written as:
```js
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
```

```js
function testLogicalOr(val) {
  
  if (val  > 20 || val < 10) {
    return "Outside";
  }

  
  return "Inside";
}

testLogicalOr(15);

```


