const filterBtn = document.querySelector('.filter__btn'),
overlay = document.querySelector('.overlay1'),
closeModal = document.querySelectorAll('.close__modal'),
createUserBtn = document.getElementById('create__user'),
modalCreate = document.querySelector('.modal__create');

filterBtn.addEventListener('click', () => {
    overlay.style.display = "block";
});

closeModal.forEach(element => {
    element.addEventListener('click', () => {
        overlay.style.display = "none";
        modalCreate.style.display = "none";
    });
});

createUserBtn.addEventListener('click', () => {
    modalCreate.style.display = "block";
});