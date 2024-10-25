//getting needed elements
const checkButton = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.querySelector('#result');

//adding event listner to the checkButton and creating function for the checkButton functionality
checkButton.addEventListener("click", ()=>{
    var inputText = textInput.value;
    var re = /[\W_]/g;  //regular expression pattern that matches any non
    var cleanText = inputText.toLowerCase().replace(re, '');
    console.log(cleanText);
    if (cleanText === "") {
        alert("Please input a value");
        return;
    }
    
    var reversedText = cleanText.split("").reverse().join("");
    if (cleanText === reversedText) {
        result.innerHTML = `<p class='user-input'><strong>${inputText}</strong> is a palindrome.</p>`;
        result.classList.remove("hidden");
    } else {
        result.innerHTML = `<p class='user-input'><strong>${inputText}</strong> is not a palindrome.</p>`;
        result.classList.remove("hidden");
    }
})