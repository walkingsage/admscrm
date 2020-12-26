const filterBtn = document.querySelector('.filter__btn'),
overlay = document.querySelector('.overlay1'),
closeModal = document.querySelector('.close__modal'),
closeNo = document.querySelector('.close');

filterBtn.addEventListener('click', () => {
    overlay.style.display = "block";
});

closeModal.addEventListener('click', () => {
    overlay.style.display = "none";
});

closeNo.addEventListener('click', () => {
    overlay.style.display = "none";
});