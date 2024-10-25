//script.js for spreadsheet

//function to generate a range of numbers
const range = (start, end) => {
    //getting the array length to ensure that the array is the size of the range
    const length = end - start + 1;
    //using Array() constructor to create a new array, addinh the length variable to set the array.length.
    return Array(length).fill(start).map((element, index) => element + index);
}

//function charRange
const charRange = (start, end) => range(start.charCodeAt(0), end.charCodeAt(0))
.map((code) => String.fromCharCode(code));
//setting the onload property of window
window.onload = () => {
    //setting container variable
    const container = document.getElementById('container');

    //creating a nested function using arrow syntax called 'createlabel' takes in name as parametr
    const createLabel = (name) => {
        //create a new element with document's createElement() method
        const label = document.createElement('div');

        //setting class name for the label element
        label.className = 'label';
        label.textContent = name;
        container.appendChild(label);
    }

    //setting variable for the column labels of the spreadsheet
    const letters = charRange('A', 'J');

    //call the forEach()
    letters.forEach(createLabel);

    //call range and chain forEach()
    range(1, 99).forEach((number) => {
        createLabel(number);
        letters.forEach((letter) => {
            //creating a new element with document's createElement() method
            const input = document.createElement('input');
            input.type = 'text';
            input.id = letter + number;
            input.ariaLabel = letter + number;
            container.appendChild(input);
        })
    })
};