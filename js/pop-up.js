$('.pop-up1__open').click(function(e) {
    e.preventDefault();
    $(".overlay1").addClass("active");
});
$('.pop-up1__exit').click(function(e) {
    $(".overlay1").removeClass("active");
});

$('.modal2__open').click(function(e) {
    e.preventDefault();
    $(".modal2").addClass("active");
});
$('.modal2__exit').click(function(e) {
    $(".modal2").removeClass("active");
});

$('.modal3__open').click(function(e) {
    e.preventDefault();
    $(".modal3").addClass("active");
});
$('.modal3__exit').click(function(e) {
    $(".modal3").removeClass("active");
});
