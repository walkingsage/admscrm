const fileList = document.querySelector('.file__list'),
fileLoader = document.getElementById('fileLoader');

$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.header__navigation').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$('.select__button_1').on('mouseover', function() {
    $('.select__menu_1').css('display','block');
});
$('.select__button_1').click(function() {
    $('.select__menu_1').css('display','none');
});

$('.select__button_2').on('mouseover', function() {
    $('.select__menu_2').css('display','block');
});
$('.select__button_2').click(function() {
    $('.select__menu_2').css('display','none');
});





