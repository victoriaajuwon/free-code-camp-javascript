//script.js

//accessing the elements
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const animationContainer = document.getElementById("animation-container");

//create an array to store animation data
const animationData = [
    {
        inputVal: 5,
        marginTop: 300,
        addElDelay: 1000,
        msg: 'decimalToBinary(5) returns "10" + 1 (5 % 2). Then it pops off the stack.',
        showMsgDelay: 15000,
        removeElDelay: 20000
    },
    {
        inputVal: 2,
        marginTop: -200,
        addElDelay: 1500,
        msg: 'decimalToBinary(2) returns "1" + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.',
        showMsgDelay: 10000,
        removeElDelay: 15000
    }
    ,
    {
        inputVal: 1,
        marginTop: -200,
        addElDelay: 2000,
        msg: 'decimalToBinary(1) returns "1" (base case) and gives that value to the stack below. Then it pops off the stack.',
        showMsgDelay: 5000,
        removeElDelay: 10000
    }
];

//function to convert decimal input to binary using while loop
const decimalToBinary = (input) => {
    //using recursion approach
    if (input ===0 || input === 1){
        return String(input);
    }
    else {
        return decimalToBinary(Math.floor(input / 2))+ (input % 2);
    }
}

//function for showing Animation
const showAnimation = () => {
    result.innerText = "Call Stack Animation";
    animationData.forEach((obj)=>{
        //timeout function create p element in the animation container and displays the message
        setTimeout(()=>{
            animationContainer.innerHTML+=`
            <p id="${obj.inputVal}" style="margin-top: ${obj.marginTop}px;" class="animation-frame">decimalToBinary(${obj.inputVal})</p>`
        }, obj.addElDelay);

        //timeout function updated the message in the p element
        setTimeout(()=>{
            document.getElementById(obj.inputVal).textContent = obj.msg;
        }, obj.showMsgDelay);

        //timeout function removes the message
        setTimeout(() => {
            document.getElementById(obj.inputVal).remove();
        }, obj.removeElDelay);

        //timeout function to convert the number 5 to binary once the animation is complete
        setTimeout(() => {
            result.textContent = decimalToBinary(5);
        }, 20000);
    })
}

//function to check user's input
const checkUserInput = () => {
    const inputInt = parseInt(numberInput.value);
    if (!numberInput.value || isNaN(inputInt)){
        alert("Please provide a decimal number");
        return;
    }
    //check if user's input is 5
    if (inputInt === 5){
        showAnimation();
        return;
    }
    console.log(numberInput.value)
    // decimalToBinary(parseInt(numberInput.value))
    result.textContent = decimalToBinary(inputInt);
    numberInput.value = "";
}

//event listener for button click
convertBtn.addEventListener('click', checkUserInput);

//event listener for keydown on the numberInput element to get value when there is a change in the input
numberInput.addEventListener('keydown', (e) =>{
    console.log(e);
    if (e.key === "Enter") {
        checkUserInput();
    }
});




/* //Learning recursion
//creating a  function to use recursion
const a = () => "freeCodeCamp " +b()
const b = () => "is " +c()
const c = () => "awesome!"
console.log(a()); */

/* //understanding recursion
const countdown = (number) => {
    // log the value of number
    console.log(number);
  
    //check if number is zero
    if (number === 0) {
        //if number is 0, end the function
      return;
    } else {
        //if number is not 0, call the function again with number - 1
      countdown(number - 1);
    }
  };
  countdown(5) */

 /*  //understanding recursion with call stack
const countDownAndUp = (number) => {
    // log the value of number
    console.log(number);
  
    //check if number is zero
    if (number === 0) {
        console.log("Reached base case");
        //if number is 0, end the function
      return;
    } else {
        //if number is not 0, call the function again with number - 1
        countDownAndUp(number - 1);
        console.log(number);
    }
  };
  countDownAndUp(5) */

/*   //function to convert decimal input to binary using while loop
const decimalToBinary = (input) => {
    //using a simpler and shorter approach
    let binary = "";
    if (input === 0) {
        binary = "0";
    }
    while(input > 0){
        input = Math.floor(input / 2);
        binary = (input % 2) + binary;
    }
    result.innerText = binary; 
}*/

/* const decimalToBinary = (input) => {
//using a longer approach
    const inputs = [];
    const quotients = [];
    const remainders = [];

    //using if statement to if condition where input is 0
    if (input === 0){
        result.innerText = "0";
        return;
    }

    //while loop to divide as long as input is greater than 0
    while (input > 0) {
        const quotient = Math.floor(input / 2);
        const remainder = input % 2;
        input = quotient;
        inputs.push(input);
        quotients.push(quotient);
        remainders.push(remainder);
    }
    console.log("Inputs: ",inputs)
    console.log("Quotients: ", quotients);
    console.log("Remainders: ", remainders);
    result.innerText = remainders.reverse().join("");
} */

/* //testing
const showAnimation = () => {
    setTimeout(()=>{console.log("free");}, 500)
    // console.log("free");
    // console.log("Code");
    setTimeout(()=>{console.log("Code");},1000);
    // console.log("Camp");
    setTimeout(()=>{console.log("Camp");}, 1500)
} */