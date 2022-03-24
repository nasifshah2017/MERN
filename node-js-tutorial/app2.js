// Function

function orange() {
  console.log("Orange");
}

orange();

// Function Expression

let red = function() {    // Anonymous Function (no name)
  console.log("Red");
}

red();  // We can call the function by calling the variabel we assigned it to


// Sending a function as an  argument to another function

function callBackFunc(func) {
  func();
}

callBackFunc(red);  // Sending the red() function as an argument to the callBackFunc() 
