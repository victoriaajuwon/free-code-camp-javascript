//function to calculate mean, the function takes in an array element
const getMean = (array) => array.reduce((acc, el)=> acc + el, 0)/array.length;

//function to get the median of the array argument
const getMedian = (array) => {
  //add the slice() to  fix the mutation that occurs on array
    const sorted = array.slice().sort((a, b) => a - b);
    if (sorted.length % 2 === 0) {
        return getMean([sorted[sorted.length / 2 - 1], sorted[sorted.length / 2]]);
    }
    else {
        return sorted[Math.floor(sorted.length / 2)];
    }
}

//function to calculate mode; mode is the number that appears most often in the list
const getMode = (array) => {
  const counts = {};
  //simpler form for the code below
  array.forEach(el => counts[el] = (counts[el] || 0) + 1);

  //find if there is no reoccurence in the array using Set
  if(new Set(Object.values(counts)).size === 1) {
    return null
  }

  //find the value with the highest occurrence using Object.keys()
  const highest = Object.keys(counts).sort((counts)=>{
    return counts[b] - counts[a];
  } )[0];
  const mode = Object.keys(counts).filter((el) => {
    return counts[el] === counts[highest]
  });
  return mode.join(", ");
}

//function to get range
const getRange = (array) => {
  return Math.max(...array) - Math.min(...array);
}

//function to get variance
const getVariance = (array) =>{
  const mean = getMean(array);
  const variance = array.reduce((acc, el) => {
    const difference = el - mean;
    const squared = difference ** 2;
    return acc + squared;
  },0) / array.length;
  return variance;
}

//function to get standardDeviation
const getStandardDeviation = (array) =>{
  const variance = getVariance(array);
  const standardDeviation = Math.pow(variance, 1/2);
  return standardDeviation;
  // const standardDeviation = Math.sqrt(variance);
}

//declaring the calclate function
const calculate = () => {
    const value = document.querySelector('#numbers').value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
    const mean = getMean(numbers);
    const median = getMedian(numbers);
    const mode = getMode(numbers);
    const range = getRange(numbers);
    const variance = getVariance(numbers);
    const standardDeviation = getStandardDeviation(numbers);
    document.querySelector("#mean").textContent = mean;
    document.querySelector("#median").textContent = median;
    document.querySelector("#mode").textContent = mode;
    document.querySelector("#range").textContent = range;
    document.querySelector("#variance").textContent = variance;
    document.querySelector("#standardDeviation").textContent = standardDeviation;
}














/* Below is the breakdown of getMean() above
const getMean = (array) => {
    using the reduce(): The .reduce() method takes an array and applies 
    a callback function to condense the array into a single value.
    const sum = array.reduce((acc, el) => acc + el, 0);
    const mean = sum / array.length;
    return mean;
} */


/* //function to calculate mode; mode is the number that appears most often in the list
//longer process - breakdown of the one above
const getMode = (array) => {
  const counts = {};
   array.forEach((el) => {
    if (counts[el]) {
      counts[el] += 1;
    }
    else {
      counts[el] = 1;
    }
    })
    console.log(counts);
} */

/* Approach to calculate the occurence
const numbersArr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4];
const counts = {};
numbersArr.forEach((el) => {
  if (counts[el]) {
    counts[el] += 1;
  } else {
    counts[el] = 1;
  }
}); */


/* Example of how to get median of an array
const testArr1 = [1, 2, 3, 4, 5]; // odd array
const testArr2 = [1, 2, 3, 4, 5, 6];// even array
const isEven = testArr2.length % 2 === 0; // check an array is even or odd, returns true if array is even
console.log(isEven);
const oddListMedian = testArr1[Math.floor(testArr1.length / 2)]; //formula for finding median for odd array
console.log(oddListMedian);
const evenListMedian = getMean([testArr2[testArr2.length / 2 - 1], testArr2[testArr2.length / 2]]); //formula for finding median for even array
console.log(evenListMedian); */

/* //function to get variance: longer process
const getVariance = (array) =>{
  const mean = getMean(array);
  const differences = array.map((el) => {return el - mean});
  const squaredDifferences = differences.map(el => el ** 2);
  const sumSquaredDifferences = squaredDifferences.reduce((acc, el) => acc + el, 0);
} */