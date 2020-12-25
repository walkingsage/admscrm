// const Store = {
//     files: [], // какое-то хранищие файлов, для примера так
// }

// function handleChange(e) {
//     // если не выбрали файл и нажали отмену, то ничего не делать
//     if (!e.target.files.length) {
//       return;
//     }
  
//     // создаем новый массив с нашими файлами
//     const files = Object.keys(e.target.files).map((i) => e.target.files[i]);
  
//     addFiles(files);
    
//     // очищаем input, т.к. файл мы сохранили
//      e.target.value = '';

//   }
  
//   function addFiles(files) {
//     // добавляем файлы в общую кучу
//     Store.files = Store.files.concat(files);
//     console.log(store.files.length);

//   }
  
//   // удалить файл из хранилища, например по индексу в массиве
//   function removeFile(index) {
//     // удаляем файл по индексу
//     Store.files.splice(index, 1);
//   }
  
//   // если надо послать файлы на сервер, формируем FormData с файлами
//   // const formData = getFilesFormData(Store.files);
//   function getFilesFormData(files) {
//       const formData = new FormData();
  
//       files.map((file, index) => {
//           formData.append(`file${index + 1}`, file);
//       });
  
//       return formData;
//   }
const fileKeys = document.querySelector('.file__list');
let filesName = [];
let filesSize = [];
let deleteBtn;
let fileInffo;
  $('form input[type=file]').on('change', function() {
    for (var i = 0; i < this.files.length; i++) {
        filesName.push(this.files[i].name);
        filesSize.push(this.files[i].size);
        fileKeys.insertAdjacentHTML('beforeend', `<div class="file__info"><div class="file__name">${filesName[i]}</div><div class="file__size">${Math.floor(filesSize[i]/1024) + "кб"}</div> <span class="delete">&times;</span></div>`);
        $('.files__load__tag').text("Файлы успешно загружены");
    }
    deleteBtn = document.querySelectorAll('.file__info > .delete');
    deleteBtn.forEach((element,i) => {
        fileInffo = document.querySelectorAll('.file__info');
        element.addEventListener('click', () => {
            fileInffo[i].remove();
        });
    });
});

let modalOpen = false;

$(".td_margin").on('click', function(){
    $(".overlay1").css("display", "block");
    modalOpen = true;
});

$(".pop-up1__exit").on('click', () => {
    $(".overlay1").css("display", "none");
    modalOpen = false;
});

