const dec = document.querySelector('.dec'),
idValue = document.getElementById('id__val'),
inc = document.querySelector('.inc'),
resultFake = document.querySelectorAll('.result'),
btnMore = document.querySelectorAll('.btn__more'),
fakeList = document.querySelectorAll('.fake__list'),
resultVar = document.querySelectorAll('.fake__item'),
fakeInput = document.querySelectorAll('.fake__input__value'),
nameInput = document.getElementById('name'),
phoneinput = document.getElementById('phone');

$('#clearrole').click(function(){
    $('.id > span').text(" ");
});

let idV = 0;

dec.addEventListener('click', () => {
    if(idV > 0){
        idV --;
        idValue.value = idV;
    }
});

inc.addEventListener('click', () => {
    idV ++;
    idValue.value = idV;
});

let fakeOpen = [];
let resultId;
let onlyOne = [];
let deleteButn;
let resultItem;
let values;



btnMore.forEach((element,i) => {

    fakeOpen.push(0);

    element.addEventListener('click', () => {
        if(fakeOpen[i] == 0){
            fakeList[i].style.display = "flex";
            fakeOpen[i] = 1;
            resultId = i;
        }
        else{
            fakeList[i].style.display = "none";
            fakeOpen[i] = 0;
        }
    });

    

});

console.log(resultFake.length);


resultVar.forEach((elem,i) => {

    onlyOne.push(0);

    elem.addEventListener('click', () => {
        if(onlyOne[i] == 0){
            resultFake[resultId].insertAdjacentHTML('beforeend', `<div class="result__item">${resultVar[i].textContent} <div class="delete" value="${i}">&times;</div></div>`);
            onlyOne[i] = 1;
            resultVar[i].style.color = "#DBDBDB";
            deleteButn = document.querySelectorAll('.delete');
            resultItem = document.querySelectorAll('.result__item');
            // if(i == 0 && i<5){
            //     values = values + " " + fakeInput[i].value;
            //     console.log(fakeInput[i].value);
            // }
            // else{
            //     fakeInput[i].value = resultVar[i].textContent;
            // console.log(fakeInput[i].value);
            // }
        }
        
        deleteButn.forEach((element,i) => {
            element.addEventListener('click', () => {
                resultItem[i].remove();
                let index = deleteButn[i].getAttribute("value");
                onlyOne[index] = 0;
                resultVar[index].style.color = "#ffffff";
            });
        });
    
    });

    
    
});

nameInput.addEventListener('input',function(){
    nameInput.value = nameInput.value.replace(/[0-9,-.,:+/*]/g, '');
});

phoneinput.addEventListener('input',function(){
    phoneinput.value = phoneinput.value.replace(/[a-z,A-Z,а-я,А-Я,-.,:+/*]/g, '');
});

$.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
};

let firstClick = 0;

$("#phone").click(function(){
    if(firstClick == 0){
        $(this).setCursorPosition(3);
        firstClick++;
    }
  }).mask("+7(999)-999-99-99");

