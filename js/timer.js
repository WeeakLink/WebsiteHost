$(function(){
    setInterval("updateFooter()", 1000);
})

function updateFooter() {
    $.ajax({
        url: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.0.0/css/all.min.css",
        dataType: "json",
        success: function(data) {
            $('footer>p:last').html(data.date + " " + data.time);
            console.log(data)
        }
    })
}