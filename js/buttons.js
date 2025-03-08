$(document).ready(function(){
    $('.button').on('click', function() {
        $(this).toggleClass('down up')
               .css('background-image', $(this).hasClass('up') ? 'url(img/up_arrow50.png)' : 'url(img/down_arrow50.png)');
        $(this).next().slideToggle(500);
    });
});
