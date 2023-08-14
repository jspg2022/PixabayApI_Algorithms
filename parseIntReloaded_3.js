const obj = {
  unity: {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  },
  tenToNineteen: {
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
  },
  tens: {
    twenty: 2,
    thirty: 3,
    forty: 4,
    fifty: 5,
    sixty: 6,
    seventy: 7,
    eighty: 8,
    ninety: 9,
  },
};

function parseIntReloaded(str, obj) {
  const arr = str
    .split(/[\s-]+/)
    .filter((word) =>
      Object.keys(obj).some(
        (key) => obj[key][word] !== undefined || word == 'hundred'
      )
    );

  let num = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in obj.unity) {
      if (arr[i + 1] === 'hundred') {
        num.push(obj.unity[arr[i]]);
        i++;
        if (arr[i + 1] in obj.tenToNineteen) {
          num.push(obj.tenToNineteen[arr[i + 1]]);
          i++;
          continue;
        } else if (arr[i + 1] in obj.tens) {
          num.push(obj.tens[arr[i + 1]]);
          i++;
        }
        if (arr[i + 1] in obj.unity) {
          num.push(obj.unity[arr[i + 1]]);
          i++;
        } else num.push(0), i++;
      } else num.push(obj.unity[arr[i]]);
    } else if (arr[i] in obj.tenToNineteen) {
      num.push(obj.tenToNineteen[arr[i]]);
    } else if (arr[i] in obj.tens) {
      num.push(obj.tens[arr[i]]);
      i++;
      if (arr[i] in obj.unity) {
        num.push(obj.unity[arr[i]]);
      } else num.push(0);
    }
  }

  console.log(...num);
}
parseIntReloaded('one', obj); // Outputs: 1
parseIntReloaded('twenty', obj); // Outputs: 20
parseIntReloaded('two hundred forty-six', obj); // Outputs: 246

parseIntReloaded(
  'seven hundred eighty-three thousand nine hundred and nineteen',
  obj
); // Outputs: 783919

const numObj = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
  //   hundred: 100,
  //   thousand: 1000,
  //   million: 1000000,
};

// with AI
function textToNumber(text) {
  const words = text.split(/[\s-]+/); // Split by spaces or hyphens
  let result = 0;
  let currentNumber = 0;

  for (const word of words) {
    const number = numObj[word];

    if (word === 'and') {
      continue; // Skip "and" since it's optional
    }

    if (number === undefined) {
      if (word === 'hundred') {
        currentNumber *= 100;
      } else if (word === 'thousand') {
        result += currentNumber * 1000;
        currentNumber = 0;
      } else if (word === 'million') {
        result += currentNumber * 1000000;
        currentNumber = 0;
      }
    } else {
      currentNumber += number;
    }
  }

  return result + currentNumber;
}

console.log(textToNumber('one')); // Outputs: 1
console.log(textToNumber('twenty')); // Outputs: 20
console.log(textToNumber('two hundred forty-six')); // Outputs: 246
console.log(
  textToNumber('seven hundred eighty-three thousand nine hundred and nineteen')
); // Outputs: 783919

// "one" => 1
// "twenty" => 20
// "two hundred forty-six" => 246
// // "seven hundred eighty-three thousand nine hundred and nineteen" => 783919
//
//
//
//
//
//
// DESCRIPTION:
// In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.

// Examples:

// "one" => 1
// "twenty" => 20
// "two hundred forty-six" => 246
// "seven hundred eighty-three thousand nine hundred and nineteen" => 783919
// Additional Notes:

// The minimum number is "zero" (inclusively)
// The maximum number, which must be supported is 1 million (inclusively)
// The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
// All tested numbers are valid, you don't need to validate them
