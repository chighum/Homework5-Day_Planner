# Homework 5 - Day Planner

## Description

For Homework 5 of the DU coding bootcamp I was tasked with creating a single day planner using JavaScript and the Moment.js Third Party API. For this assignment I was given the existing index.html, which I had to add too, and style.css, but had to write the script.js from scratch.

In the index.html I added all of the timeblocks seen on the screen with the time 8 AM-5 PM on the left, an input form in the middle, and a save button on the right. Once I styled this to my liking, all of the work left to do was in Javascript.

Working with Moment.js, I was able to link the current date to the top of the planner. From there I wrote a .each() iteration over the time blocks to compare the time block's hour to the current hour and assign the premade CSS classes of past, present, or future to the input slot. Next, I added a click listener to all of the save buttons that stores the value of the users input for that slot into local storage. Lastly, I had to render the values from local storage to the screen, which required another .each() iteration over each of the input slots to check if they have a value stored in local storage and then appending it to the screen. This required the most debugging of the assignment, as I had to add 8 to x, the input, for local storage because of the way I named the properties 8-17 to correspond to the military time.

This assignment helped me to practice working with APIs, specifically Moment.js, in order to pull the current date to the top of the screen and apply the classes of past, present and future to the time slots. It also helped me to practice working with jQuery syntax, as this is the first assignment I've done entirely in jQuery. A large part of that was the two .each() iterations I had to write.

## Usage

If you would like to be able to use the day planner for yourself, you can access the website at the following link: https://chighum.github.io/Homework5-Day_Planner

You can also what the deployed website looks like live in action below:

![User click through of interactive day planner.](./assets/images/DayPlanner.gif)
