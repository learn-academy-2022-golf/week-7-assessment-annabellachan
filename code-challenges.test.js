// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

const { objectExpression } = require("@babel/types")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// describe("functionName", () => {
// it("describe what functionName does here", () => {
//   expect(functionName(pass arg as needed)).toEqual(expected output)
//   })
//})
  

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.



describe("comSentence", () => {
it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
  const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]
  expect(comSentence(people)).toEqual(["Ford Perfect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy", "Arthur Dent is a radio employee"])
  })
})

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

    // ReferenceError: comSentence is not defined

// b) Create the function that makes the test pass.
    // Create a function called comSentence that passes an array
    // Create a new empty array
    // Use a for loop to iterate over the array
    // Set new variable to split the name and use dot notation to call on the object
    // Use .map to iterate over the array at each index 
       // At index 0, use .toUpperCase  to uppercase the first letter 
       // Use .slice to include back the rest of the words
       // Use .join 
    // Use .push to push the sentence to the new array 
    // Return new array 

const comSentence = (array) => {
  let newArray = []
  for(let i = 0; i < array.length; i++){
    let name = array[i].name
    let sptName = name.split(" ")
    let mapArray = sptName.map(value => {
      return `${value[0].toUpperCase().slice(1)}`
    })
    newArray.push(`${array[i].occupation}`)

  }
  return newArray
}

// I wasn't sure where I can incorporate .join in this code and am stuck. Please let me know if I'm going the right direction.

// expect(received).toEqual(expected) // deep equality

// - Expected  - 3
// + Received  + 3

//   Array [
// -   "Ford Perfect is a hitchhiker.",
// -   "Zaphod Beeblebrox is president of the galaxy",
// -   "Arthur Dent is a radio employee",
// +   "a hitchhiker",
// +   "president of the galaxy",
// +   "a radio employee",
//   ]

//   33 |     { name: "arthur dent", occupation: "a radio employee" }
//   34 |   ]
// > 35 |   expect(comSentence(people)).toEqual(["Ford Perfect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy", "Arthur Dent is a radio employee"])
//      |                               ^
//   36 |   })
//   37 | })
//   38 |

//   at Object.toEqual (code-challenges.test.js:35:31)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.


describe("remainder", () => {
it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]  
  expect(remainder(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
  expect(remainder(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

    // ReferenceError: remainder is not defined

// b) Create the function that makes the test pass.
    // Create a function called remainder that passes in an array
      // Create a new array to store the remainder that will be found after every iteration let newArray = []
    // Use a for loop to iterate over the array
    // Use the method typeof to determine if the array is a number
    // Use .push to store the remainder in new array
    // return new Array

  const remainder = (array) => {
    let newArray = []
    for(let i = 0; i < array.length; i++){
      if(typeof array[i] === 'number') {
        newNum = array[i] % 3
        newArray.push(newNum)
      }
    }
    return newArray
  }
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("cube3", () => {
it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
  const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
  const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
  expect(cube3(cubeAndSum1)).toEqual(99)
  expect(cube3(cubeAndSum2)).toEqual(1125)
  })  
})
    //ReferenceError: cube3 is not defined

// b) Create the function that makes the test pass.
    // Create a function that takes in an array
    // let sum = 0 
    // Use a for loop to iterate over the array and cube each element
      // set array[i] to multiply 3x
    // return the sum 

  const cube3 = (array) => {
    let sum = 0
    for(i = 0; i < array.length; i++) {
      sum += array[i] * array[i] * array[i]
    }
    return sum
  }
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total