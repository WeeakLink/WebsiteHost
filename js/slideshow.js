$(document).ready(function(){
    setInterval(updateSlideshow, 5000);
});

function updateSlideshow() {
    const $currentImage = $('#slide_image img.active');
    const $nextImage = $currentImage.next().length ? $currentImage.next() : $('#slide_image img:first');

    const $currentText = $('#slide_info div.active');
    const $nextText = $currentText.next().length ? $currentText.next() : $('#slide_info div:first');

    // Update images
    $currentImage.fadeOut(1000, function(){
        $(this).removeClass('active');
        $nextImage.fadeIn(1000).addClass('active');
    });

    // Update texts
    $currentText.fadeOut(1000, function(){
        $(this).removeClass('active');
        $nextText.fadeIn(1000).addClass('active');
    });
}
