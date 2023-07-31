// My answer
function sumPairs(lst, sum) {
  let arr;
  let secondElement = lst.length;

  for (let i = 0; i < lst.length; i++) {
    for (let j = i + 1; j < lst.length && secondElement > j; j++) {
      if (lst[i] + lst[j] === sum) {
        arr = [lst[i], lst[j]];
        secondElement = j;
      }
    }
  }
  console.log(arr);
}

// AI is used for code optimization
function sumPairs1(lst, sum) {
  const seen = {};

  for (let i = 0; i < lst.length; i++) {
    const complement = sum - lst[i];

    if (seen[complement] !== undefined) {
      console.log([complement, lst[i]]);
      return;
    }

    seen[lst[i]] = true;
  }
  console.log(undefined);
  // console.log('No pair found.');
}

function sumPairs2(lst, sum) {
  const seen = {};

  for (const num of lst) {
    const complement = sum - num;

    if (seen[complement] !== undefined) {
      console.log([complement, num]);
      return;
    }

    seen[num] = true;
  }

  console.log(undefined);
}

// Test cases
console.log('sumPairs');
sumPairs([11, 3, 7, 5], 10);
sumPairs([4, 3, 2, 3, 4], 6);
sumPairs([0, 0, -2, 3], 2);
sumPairs([10, 5, 2, 3, 7, 5], 10);

console.log('sumPairs1');
sumPairs1([11, 3, 7, 5], 10);
sumPairs1([4, 3, 2, 3, 4], 6);
sumPairs1([0, 0, -2, 3], 2);
sumPairs1([10, 5, 2, 3, 7, 5], 10);

console.log('sumPairs2');
sumPairs2([11, 3, 7, 5], 10);
sumPairs2([4, 3, 2, 3, 4], 6);
sumPairs2([0, 0, -2, 3], 2);
sumPairs2([10, 5, 2, 3, 7, 5], 10);

////////////////////////////////////////////////////////////////////////////
// DESCRIPTION:
// Sum of Pairs
// Given a list of integers and a single sum value, return the first two values
//  (parse from the left please) in order of appearance that add up to form the sum.

// If there are two or more pairs with the required sum,
// the pair whose second element has the smallest index is the solution.

// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * the correct answer is the pair whose second value has the smallest index
// == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * the correct answer is the pair whose second value has the smallest index
// == [3, 7]
// Negative numbers and duplicate numbers can and will appear.

// NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.
