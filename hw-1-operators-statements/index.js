/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// function should return two numbers
const sum = (a, b) => {
  return a + b;
};

/**
 * @param {number} num
 * @return {boolean}
 */
// function should return if number is even
const isNumberEven = (num) => {
  if (num=num % 2 ===0) {
    return true;
  } else {
    return false;
  }
}; 

/**
 * @param {number} num1
 * @param {number} num2
 * @return {string}
 */
// Write logic to compare two numbers and return which number is greater or they are equal
const findLargestNumber = (num1, num2) => {
  if (num1>num2) {
    return num1 +' is the largest number';
  } else if (num2>num1){
    return num2 +' is the largest number';
  } else if(num1===num2){
    return num1 +' is equal to '+ num2;
  }
};

/**
 * @param {number} side1
 * @param {number} side2
 * @param {number} side3
 * @return {string}
 */
// function should return type of triangle
const findTriangleType = (side1, side2, side3) => {
  if (side1===side2 && side1===side3 && side2===side3) {
    return 'Equilateral triangle';
  } else if (side1===side2 || side1===side3 || side2===side3) {
    return 'Isosceles triangle';
  } else if (side1!==side2 && side1!==side3 && side2!==side3) {
    return 'Scalene triangle';
  }
};

/**
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
//function should return amount of days in month
const findDaysInMonth = (month, year) => {

  if (month>=1 && month<=12 && month % 2 ===0 && month===2 && year % 4 ===0) {
    return 'The Month has 29 days';
  } else if (month>=1 && month<=12 && month % 2 ===0 && month===2 && year % 4 !==0) {
    return 'The Month has 28 days';
  } else if (month>=1 && month<8 && month % 2 ===0 && month!==2 || month>=8 && month<=12 && month % 2 !==0 ) {
    return 'The Month has 30 days';
  } else if (month>=1 && month<8 && month % 2 !==0 || month>=8 && month<=12 && month % 2 ===0 ) {
    return 'The Month has 31 days'; 
  } else {
    return 'Invalid Month of value '+ month;
  }
}   
  
/**
 * @param {number} num1
 * @param {number} num2
 * @param {string} operation
 * @return {number | string}
 */
const calculateResult = (num1, num2, operation) => {
  let Result;
  if (operation==='add') {
    Result=num1+num2;
    return Result;
  } else if (operation==='subtract') {
    Result=num1-num2;
    return Result;
  } else if (operation==='multiply') {
    Result=num1*num2;
    return Result;
  } else if (operation==='divide') {
    Result = num1/num2;
    return Result;
  } else if (operation==='modulus') {
    Result = num1%num2;
    return Result;
  } else if (operation==='someunknownoperation') {
    Result='someunknownoperation is an invalid operation';
    return Result;
  }
}

/**
 * @return {string}
 */
// Create multiply table multiplying all digits from 2 t0 9 on 1 - 10 and write result in string
const getMultiplicationTable = () => {
  let num;
 let j;
 let i;
  
  for (let i=2; i<10; i++){
    for (let j=1; j<11; j++){
      num=i*j;
      Table= '==='+i+'===\n'+i+'*'+j+'='+ num;
    }
   
  }
  return Table;
}


module.exports = {
  isNumberEven,
  findLargestNumber,
  findTriangleType,
  findDaysInMonth,
  sum,
  calculateResult,
  getMultiplicationTable,
};
