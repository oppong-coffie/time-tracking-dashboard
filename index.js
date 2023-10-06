// Get the variables
var daily = $('.daily');
var weekly = $('.weekly');
var monthly = $('.monthly');

var workhours = $('#workhours');
var workprevious = $('#workprevious');

var playhours = $('#playhours');
var playprevious = $('#playprevious');

var studyhours = $('#studyhours');
var studyprevious = $('#studyprevious');

var exercisehours = $('#exercisehours');
var exerciseprevious = $('#exerciseprevious');

var socialhours = $('#socialhours');
var socialprevious = $('#socialprevious');

var selfcarehours = $('#selfcarehours');
var selfcareprevious = $('#selfcareprevious');

// Function to change text for daily
daily.click(function() {
    daily.addClass('highlight');
    
    if (weekly.hasClass('highlight')) {
        weekly.removeClass('highlight');
    }
    if (monthly.hasClass('highlight')) {
        monthly.removeClass('highlight');
    }
    
    workhours.text('5hrs');
    workprevious.text('Last week - 7hrs ');

    playhours.text('1hr');
    playprevious.text('Last week - 2hrs ');

    studyhours.text('0hr');
    studyprevious.text('Last week - 1hrs ');

    exercisehours.text('1hrs');
    exerciseprevious.text('Last week - 1hrs ');

    socialhours.text('1hrs');
    socialprevious.text('Last week - 3hrs ');
    
    selfcareprevious.text('Last week - 0hrs ');
    selfcarehours.text('1hrs');

});

// Function to change text for weekly
weekly.click(function() {
    weekly.addClass('highlight');
    
    if (daily.hasClass('highlight')) {
        daily.removeClass('highlight');
    }
    if (monthly.hasClass('highlight')) {
        monthly.removeClass('highlight');
    }

    workhours.text('32hrs');
    workprevious.text('Last week - 36hrs ');

    playhours.text('10hr');
    playprevious.text('Last week - 8hrs ');

    studyhours.text('4hr');
    studyprevious.text('Last week - 7hrs ');

    exercisehours.text('4hrs');
    exerciseprevious.text('Last week - 5hrs ');

    socialhours.text('5hrs');
    socialprevious.text('Last week - 10hrs ');
    
    selfcareprevious.text('Last week - 2hrs ');
    selfcarehours.text('2hrs');

    // weekly.toggleClass('active');
});

// Function to change text for monthly
monthly.click(function() {
    monthly.addClass('highlight');
    
    if (weekly.hasClass('highlight')) {
        weekly.removeClass('highlight');
    }
    if (daily.hasClass('highlight')) {
        daily.removeClass('highlight');
    }

    workhours.text('103hrs');
    workprevious.text('Last week - 128hrs ');

    playhours.text('23hr');
    playprevious.text('Last week - 29hrs ');

    studyhours.text('13hr');
    studyprevious.text('Last week - 19hrs ');

    exercisehours.text('11hrs');
    exerciseprevious.text('Last week - 18hrs ');

    socialhours.text('21hrs');
    socialprevious.text('Last week - 23hrs ');
    
    selfcareprevious.text('Last week - 7hrs ');
    selfcarehours.text('11hrs');

    monthly.toggleClass('active');
});
