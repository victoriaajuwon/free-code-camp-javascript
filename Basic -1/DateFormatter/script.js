//accessing the various elements in the html such as playlist song list, play button and the pause button
const currentDateParagraph = document.getElementById('current-date');
const dateOptionsSelectElement = document.getElementById('date-options');

//using the Date() constructor
const date = new Date();

//using the getDate() to assign value to the day variable
const day = date.getDate();

//using the getMonth() to assign value to the month variable
const month = date.getMonth() + 1;

//using the getFullYear() to assign value to the year variable
const year = date.getFullYear();

//using the getHours() to assign value to the hour variable
const hours = date.getHours();

//using the getMinutes() to assign value to the minute variable
const minutes = date.getMinutes();

//storing an empty template literals to formattedDate 
const formattedDate = `${day}-${month}-${year}`;
console.log(formattedDate);
currentDateParagraph.textContent = formattedDate;

//using eventListener to update the date format
dateOptionsSelectElement.addEventListener("change", () => {
    switch (dateOptionsSelectElement.value) {
        case "yyyy-mm-dd":
            currentDateParagraph.textContent = formattedDate.split("-").reverse().join("-");
        break;
        case "mm-dd-yyyy-h-mm":
            currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
        break;
        default:
            currentDateParagraph.textContent = formattedDate;
    }
});


/* //PRACTICE EXAMPLES
// const exampleSentence = "selur pmaCedoCeerf".split();
// const exampleSentence = "selur pmaCedoCeerf".split("");
//chaining the reverse method with the split method
// const exampleSentence = "selur pmaCedoCeerf".split("").reverse();
//chaining the join method with reverse method and the split method
const exampleSentence = "selur pmaCedoCeerf".split("").reverse().join("");
console.log(exampleSentence);
 */