$(document).ready(function () {

    function colorBoxes() {
        return '#' + Math.random().toString(16).slice(2, 8);
    };

    $(".box").on("mouseenter", function () {
        $(this).css("background-color", colorBoxes());
        $(this).css('box-shadow', "0 0 10px white");
        $(this).css("z-index", "100000");
    });

    $(".box").on("mouseleave", function () {
        $(this).css("z-index", "1");
        $(this).css("box-shadow", "none");
    });


});
