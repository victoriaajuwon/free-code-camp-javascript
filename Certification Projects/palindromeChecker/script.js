//getting needed elements
const checkButton = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.querySelector('#result');
// let wordInput = "";




//function to check if input is empty
const isInputEmpty = (inputtedText) => {
    if (inputtedText === ''){
        alert("Please enter a word or phrase.");
    }
}
//function to check if input is valid
// const isInputValid = (inputtedText) => {
//     if (isInputEmpty(inputtedText)){
//         const regex = "/[^a-z0-9]/g";
//     if (!inputtedText.contains(regex)) {
//         return true
//     } else {
//         alert("Please enter a valid word.");
//         return false;
//     }
//     }
// }

//function to check if the inputted text is palindrome
const isTextPalindrome = (inputtedText) => {
    var reversedText = inputtedText.split("").reverse().join("");
    if (reversedText === inputtedText) {
        result.innerHTML = `<p class="user-input"><strong>${inputtedText}</strong> is a palindrome</p>`
        result.classList.remove("hidden");
    } else {
        result.innerHTML = `<p class="user-input"><strong>${inputtedText}</strong> is not a palindrome</p>`
        result.classList.remove("hidden");
    }
}

/* const changeInput = (e)=> {
    // e.preventDefault()  //prevent form submission
    let word = "";
    if (e.target.value.trim()) {
        word += e.target.value.trim();
    }

    wordInput += word;
} */

/* //function for the checkButton functionality
const checkButtonAction = () => {
    const inputtedText = wordInput.toLowerCase();

    console.log(inputtedText)
    // textInput.setAttribute("value",
    // console.log(wordInput);
    // isInputEmpty();
    // isInputValid();
    // isTextPalindrome();
} */

//function for the checkButton functionality
const checkButtonAction = () => {
    var userInput = textInput.value.toLowerCase().replace(/[^a-z0-9]/g, '');
    //console.log(userInput)
    isInputEmpty(userInput);
    isTextPalindrome(userInput);
}


//add Event Listener to check button
checkButton.addEventListener("click", checkButtonAction);
// textInput.addEventListener("change", changeInput);


checkButton.addEventListener("click", ()=>{
    var inputText = textInput.value;
    var cleanText = inputText.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (inputText === "") {
        alert("Please input a value");
        return;
    }
    
    var reversedText = inputText.split("").reverse().join("");
    if (inputText === reversedText) {
        document.querySelector(".result-div").innerHTML = "<p class='user-input'>It is a palindrome.</p>";
        document.querySelector(".result-div").classList.remove("hidden");
    } else {
        document.querySelector(".result-div").innerHTML = "<p class='user-input'>It is not a palindrome.</p>";
        document.querySelector(".result-div").classList.remove("hidden");
    }
})