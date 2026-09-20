const add = function(num1, num2) {
  
  return(num1 + num2);
	
};

const subtract = function(num1, num2) {
	return(num1 - num2);
};

const sum = function(array) {
  let total = 0;
  for (const num of array) {
    total +=num;
  }
  return total;
};

const multiply = function(array) {
  let total = 1;
for (const num of array) {
  total *=num;
} 
return total;

};

const power = function(base, exponent) {
  return base ** exponent;
};

const factorial = function(n) {
  let product = 1;

	for (let i = n; i > 1; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
