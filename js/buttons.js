//jQuery shortcut for document.onload()
$(function(){
    initButtonListeners()
});

// Setup the onclick event listeners for the buttons
function initButtonListeners() {

    // find all objects with button class
    var $buttons = $('.button');

    // loop over each button, accessed using the variable 'this'
    $buttons.each(function() {

        // create the function that runs when this element is clicked on.
        $(this).click(function () {

            // toggle button
            toggleButton($(this))
            
            // show/hide the text in the next sibling with 500ms animation
            $(this).next().toggle(500);
          });
    });
}

/*
 Show an up or down arrow depending on current state
 Calling this will toggle up/down state

 @param button jQuery object containing a button
*/
function toggleButton(button) {
    if (button.hasClass('down')) {
        button.css('background-image', 'url(img/up_arrow50.png)');
        button.removeClass('down');
        button.addClass('up');
    } else if (button.hasClass('up')) {
        button.css('background-image', 'url(img/down_arrow50.png)');
        button.removeClass('up');
        button.addClass('down');
    }
}