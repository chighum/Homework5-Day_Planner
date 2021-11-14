// add current date to top of planner
var today = moment();
$("#currentDay").text(today.format("MMMM Do, YYYY"));

// add timeblocks 8 am to 5 pm
// color code the timeblocks by past, present, future
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
