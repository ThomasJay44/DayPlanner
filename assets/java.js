// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var timeBlock = $('.time-block');
var saveButton = $(".saveBtn");
var container = $(".container");
var description = $(".description");

function currentTime(){
    var currentDate = dayjs().format('dddd, MMMM D YYYY');
    var currentHour = dayjs().format('h:mm:ss a');
    $("#currentDay").text(currentDate);
    console.log(currentHour);
};

function setColor() {

    timeBlock.each(function(i){
        $(this).children("textarea").val(localStorage.getItem($(this).attr("id")));
    })


    timeBlock.each(function(i){
        var actualTime = parseInt(dayjs().format('H'));
        var scheduleTime = parseInt($(this).attr('id').split('-')[1]);
        console.log(i, actualTime);
        console.log(i, scheduleTime);

        if(actualTime == scheduleTime){
            $(this).removeClass('future past')
            $(this).addClass('present');
        } else if(actualTime > scheduleTime){
            $(this).removeClass('future present');
            $(this).addClass('past');
        } else if(actualTime < scheduleTime){
            $(this).removeClass('present past');
            $(this).addClass('future')
        }
    })
}

saveButton.on('click', function (i){
    timeBlock.each(function() {
        localStorage.setItem($(this).attr("id"), $(this).children("textarea").val());
    })
});

$(function () {
    currentTime()
    setColor()

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
