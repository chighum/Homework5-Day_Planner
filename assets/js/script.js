// add current date to top of planner
var today = moment();
$("#currentDay").text(today.format("MMMM Do, YYYY"));

// add timeblocks 8 am to 5 pm
// COLOR CODE the timeblocks by past, present, future
// start by using moment to get current time, rounded down to the nearest hour
var currentTime = parseInt(moment().format("H"));

// create a variable containing all of the div's with class "time-block" in an array
var timeBlockHour = $(".time-block");

// iterate over the time block array comparing current time to the value of each time blocks id
// the id's for each time block are numbered 8-17 because moment returns a value 1-24 for current hour
timeBlockHour.each(function (i) {
  if (currentTime > parseInt(timeBlockHour[i].id)) {
    $(this).next().addClass("past");
  } else if (currentTime === parseInt(timeBlockHour[i].id)) {
    $(this).next().addClass("present");
  } else if (currentTime < parseInt(timeBlockHour[i].id)) {
    $(this).next().addClass("future");
  }
});

// make timeblocks input forms with buttons to save user info to local storage
// SAVE BUTTON
$(".saveBtn").on("click", function (event) {
  var userInput =
    // Access the input value through DOM traversal from button
    event.target.parentElement.previousElementSibling.children[0].value;
  // set the user input to local storage
  localStorage.setItem(
    event.target.parentElement.previousElementSibling.previousElementSibling.id,
    userInput
  );
});

var inputSlot = $(".form-input");
// RENDER TO PAGE - use .each function to iterate over local storage
inputSlot.each(function (x) {
  // local storage keys are 8-17 corresponding to the time
  if (localStorage[x + 8]) {
    // meannwhile inputSlot is an array with indexes 0-9 so
    // must add 8 to x for localStorage or go back and change storage keys
    inputSlot[x].append(localStorage[x + 8]);
  }
});
