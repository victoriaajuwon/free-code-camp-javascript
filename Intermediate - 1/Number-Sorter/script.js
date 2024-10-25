//accessing HTML elements using the getElementbyId() of document
const sortButton = document.getElementById('sort');


//dclaring the sortinputArray function
const sortInputArray = (event) => {
    event.preventDefault();
    const inputValues = [...document.getElementsByClassName('values-dropdown')].map((dropdown) => Number(dropdown.value));
    // const sortedValues = bubbleSort(inputValues);
    // const sortedValues = selectionSort(inputValues);
    // const sortedValues = insertionSort(inputValues);
    //you can also sort the array by using the built-in sort method
    // const sortedValues = inputValues.sort();
    //updating the sort function so that it sorts the numbers correctly
    const sortedValues = inputValues.sort((a,b) => {
        return a - b;
    });
    updateUI(sortedValues);
}

//funtion to update the display with the sorted number
const updateUI = (array = []) => {
    array.forEach((num, i) => {
        const outputValueNode = document.getElementById(`output-value-${i}`);
        outputValueNode.innerText = num;
    });
}


//sorting the array with bubblesort:
// it tarts at the beginning of the array and 'bubbles up' unsorted 
// values towards the end, iterating through the array until it is completely sorted.
const bubbleSort = (array) => {
    for (let i =0; i<array.length; i++){
        for (let j=0; j<array.length-1; j++){
            if (array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

//sorting array with selection sort: 
//Selection sort works by finding the smallest value in the array, then
//swapping it with the first value in the array. Then, it finds the next
//smallest value in the array, and swaps it with the second value in the array.
//It continues iterating through the array until it is completely sorted.
const selectionSort = (array) => {
    for (let i = 0; i<array.length; i++){
        let minIndex = i;
        for (let j = i+1; j<array.length; j++){
            
            if (array[j] < array[minIndex]){
                minIndex = j;
            }
        }
        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
    return array;
}


//sorting array with insertion sort: 
/* Insertion sort works by building up a sorted array at the beginning of the list.
It begins the sorted array with the first element.
Then it inspects the next element and swaps it backward into the sorted array until it is in a sorted position, and so on.
This algorithm will use while loop, the loop needs two conditions
1. It should not run beyond the beginning of the array (accessed with j)
2. The loop should not run after it finds a value smaller than the current value */
const insertionSort = (array) => {
    for(let i = 1; i<array.length; i++){
        //declaring a current value variable
        const currValue = array[i];
        //declaring a j variable to iterate through the array
        let j = i - 1;
        while (j >=0 && array[j] > currValue){
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = currValue;
    }
    return array;
}


// add event listener to #sort button
sortButton.addEventListener('click', sortInputArray);