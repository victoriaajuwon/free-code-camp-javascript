//script.js

//accessing the elements from the DOM using .getElementByID()
const messageInput = document.getElementById('message-input');
const result = document.getElementById('result');
const checkMessageButton = document.getElementById('check-message-btn');

//declaring regular expression variable to match 'please help' or 'assist me'
const helpRegex = /please help|assist me/i;

//declaring regular expression variable to match 'dollars'
// const dollarRegex = /[0-9]+ dollars/i;
// const dollarRegex = /[0-9]+ hundred|thousand|million|billion dollars/i;
const dollarRegex = /[0-9]+ (?:hundred|thousand|million|billion)? dollars/i;

//declaring regular expression variable to matach 'free money'
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;

//declaring regular expression variable to match 'stock alert'
const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;

//declaring regular expression variable to match 'dear friend'
const dearRegex = /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i;


//creating an array to store the regular expression
const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];

// function to check if a word or phrase is a spam
// const isSpam = (msg) => {}
// const isSpam = msg => msg.match(helpRegex);
// const isSpam = msg => helpRegex.test(msg);
const isSpam = (msg) => denyList.some((regex) => regex.test(msg));

//event listener to checkMessageButton
checkMessageButton.addEventListener('click', () => {
    //check if the message input is empty and trigger an alert
    if (messageInput.value === '') {
        alert("Please enter a message.");
        return;
    }

    //set the result. textContent value to the message of the ternary operator checking if isSpam is true or false
    result.textContent = isSpam(messageInput.value) ? "Oh no! This looks like a spam message." : "This message does not seem to contain any spam.";

    //set the messageInput.value to empty string.
    messageInput.value = '';
})