// JavaScript Functions - part 1

// 1. Define a function called sum that takes two numbers as arguments and
// returns their sum.

function sum(x, y) {
  var z = x + y;
  return z;
}

var result = sum(3, 4);
console.log(result);

// 2. Define a function called isEqual that takes two arguments and returns
// a boolean. Return true if the two arguments are equal and return false
// if they are not.

function isEqual (x, y) {
  if (x === y) {
    return true;
  } else {
    return false;
  }
}
console.log(isEqual(35,35));
console.log(isEqual(35,100));

// 3. Define a function called discountPercentage that returns the total
// discount ($), given the original amount and discount percentage (as arguments).
// Return a warning if the discount amount is greater than 100 or less that
// 0 percent.

// 4. Define a function called stringCapitalize that takes a string as an
// argument and returns the same string with the first letter of each word
// capitalized. Assume that each individual work is separated by only one space.

// According to a quick talk from Michael: Need 2 functions
//
// Function 1
// 1. Convert string to array
// 2. loop through array, passing each work to second function
// Function 2
// 3. this function taks a word and capitalizes the first letter. return the word
// 4. push each word to the new array in the loop
// 5. once the loop is done, convert the new array to a string and return it

function stringCapitalize(string) {
  var words = string.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
console.log(stringCapitalize("This, right here, is my, string!"));

// try # 2

function stringCapitalizeTwo(str) {
  var wordArr = str.split(" ");
  var newWordArr = [];
  for (var i = 0; i < wordArr.length; i++) {
    var capitalizedWord = capitalizeString(wordArr[i]);
    newWordArr.push(capitalizedWord);
  }
  return newWordArr.join(" ");
}

function capitalizeString(word) {
  newWord = word.charAt(0).toUpperCase() + word.slice(1);
  console.log(newWord);
  return newWord;
}

console.log(stringCapitalizeTwo("today is tuesday!"));
