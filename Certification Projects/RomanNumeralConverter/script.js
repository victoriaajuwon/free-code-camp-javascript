//script.js

//accessing the elements
const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

//creating a array of objects to store the roman numerals
const romanNumerals = [
    {
        value: 1000,
        numeral: 'M'
    },
    {
        value: 900,
        numeral: 'CM'
    },
    {
        value: 500,
        numeral: 'D'
    },
    {
        value: 400,
        numeral: 'CD'
    },
    {
        value: 100,
        numeral: 'C'
    },
    {
        value: 90,
        numeral: 'XC'
    },
    {
        value: 50,
        numeral: 'L'
    },
    {
        value: 40,
        numeral: 'XL'
    },
    {
        value: 10,
        numeral: 'X'
    },
    {
        value: 9,
        numeral: 'IX'
    },
    {
        value: 5,
        numeral: 'V'
    },
    {
        value: 4,
        numeral: 'IV'
    },
    {
        value: 1,
        numeral: 'I'
    }
];

//function to convert from number to roman numeral
const numberToRoman = (num) => {
    let numeral = '';
    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].value) {
            numeral += romanNumerals[i].numeral;
            num -= romanNumerals[i].value;
        }
    }
    return numeral;
}

//function to check user's input
const checkUserInput = () => {
    //convert input from string to int
    const inputValue = numberInput.value;
    const inputInt = parseInt(inputValue);
    if (!numberInput.value || isNaN(inputInt)){
        result.innerText = "Please enter a valid number";
        return;
    }
    else if (inputValue.includes('-1') || inputInt === -1 ) {
        result.innerText = "Please enter a number greater than or equal to 1";
        inputValue = '';
        return
    }
    else if (inputInt >= 4000) {
        result.innerText = "Please enter a number less than or equal to 3999";
        inputValue = '';
    }
    else{
        //convert input from int to roman numeral
        result.innerText = numberToRoman(inputInt);
        //clear the value of the input field
        inputValue = '';
    }
}

//event listener to the convert button
convertBtn.addEventListener("click", () =>{
    result.classList.remove('hidden');
    checkUserInput();
});



//Test for the following
const test = 
[
    {
        numberInput: '', 
        result:"Please enter a valid number",
        testStatus: 'pass'
    },
    {
        numberInput: '-1' , 
        result:"Please enter a number greater than or equal to 1",
        testStatus: 'pass'
    },
    {
        numberInput: '>=4000', 
        result:"Please enter a number less than or equal to 3999",
        testStatus: 'pass'
    },
    {
        numberInput: '9', 
        result:"IX",
        testStatus: 'pass'
    },
    {
        numberInput: '16', 
        result:"XVI",
        testStatus: 'pass'
    },
    {
        numberInput: '649', 
        result:"DCXLIX",
        testStatus: 'pass'
    },
    {
        numberInput: '1023', 
        result:"MXXIII",
        testStatus: 'pass'
    },
    {
        numberInput: '3999', 
        result:"MMMCMXCIX",
        testStatus: 'pass'
    }

]