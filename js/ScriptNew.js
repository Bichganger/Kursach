'Use strict';
// $(document).ready(function() {
//     // Описания для каждого слайда
//     const descriptions = [
//         {
//             title: "Динамика и мощь M5 F90",
//             text: "BMW M5 F90 - это воплощение динамики и мощи. Разгон до 100 км/ч за считанные секунды, бескомпромиссная управляемость и невероятный звук выхлопа - все это делает M5 F90 настоящим королем дорог."
//         },
//         {
//             title: "Инновации и технологии M5 F90",
//             text: "M5 F90 оснащен самыми передовыми технологиями, включая интеллектуальную систему полного привода M xDrive, адаптивную подвеску и множество других инновационных решений, которые обеспечивают непревзойденный уровень комфорта и безопасности."
//         },
//         {
//             title: "Дизайн и эксклюзивность M5 F90",
//             text: "M5 F90 - это не только мощный и технологичный автомобиль, но и настоящий произведение искусства. Агрессивный и элегантный дизайн, роскошный интерьер и внимание к деталям делают M5 F90 уникальным и эксклюзивным автомобилем."
//         }
//     ];

//     // Функция для обновления описания
//     function updateDescription(index) {
//         $("#m5Description h3").text(descriptions[index].title);
//         $("#m5Description p").text(descriptions[index].text);
//     }

//     // Обработчик события slide.bs.carousel
//     $('#m5Slider').on('slide.bs.carousel', function (e) {
//         let index = $(e.relatedTarget).index();
//         updateDescription(index);
//     });

//     // Инициализация описания для первого слайда
//     updateDescription(0);
// });
/*слайдер*/





/*document.addEventListener('DOMContentLoaded', function() {
    const colorSelect = document.getElementById('colorSelect');
    const wheelSelect = document.getElementById('wheelSelect');
    const carImage = document.getElementById('carImage');
    const selectedColor = document.getElementById('selectedColor');
    const selectedWheels = document.getElementById('selectedWheels');

    colorSelect.addEventListener('change', function() {
        const color = this.value;
        const imagePath = `img/m5_${color}.png`;
        carImage.src = imagePath;
        selectedColor.textContent = this.options[this.selectedIndex].text;
    });

    wheelSelect.addEventListener('change', function() {
        selectedWheels.textContent = this.options[this.selectedIndex].text;
    });
});*/

//наработки на главный экран
document.addEventListener('DOMContentLoaded', function() {
    const partsArea = document.getElementById('partsArea');
    const dropZone = document.getElementById('dropZone');
    const draggableElements = document.querySelectorAll('.draggable');
    let partsCount = 0;
    const totalParts = draggableElements.length;
    const carImage = document.createElement('img');
    carImage.src = 'img/m5_full.png';
    carImage.alt = 'Собранная M5';
    carImage.classList.add('img-fluid');
    dropZone.appendChild(carImage);

    const loader = document.createElement('div');
    loader.classList.add('loader', 'fas', 'fa-spinner');
    dropZone.appendChild(loader);

    // Функция для обработки начала перетаскивания
    function dragStart(event) {
        event.dataTransfer.setData('text/plain', event.target.id);
        event.target.classList.add('dragging');
    }

    // Функция для обработки окончания перетаскивания
    function dragEnd(event) {
        event.target.classList.remove('dragging');
    }

    // Обработчик перетаскивания над зоной
    function dragOver(event) {
        event.preventDefault();
    }

    // Обработчик бросания элемента в зону
    function drop(event) {
        event.preventDefault();
        const id = event.dataTransfer.setData('text/plain');
        const draggedElement = document.getElementById(id);

        if (draggedElement && !draggedElement.classList.contains('hidden')) {
            draggedElement.classList.add('hidden');

            partsCount++;
            if (partsCount === totalParts) {
                // Показываем загрузчик
                loader.classList.add('active');

                // Задержка перед показом изображения
                setTimeout(function() {
                    loader.classList.remove('active');
                    carImage.classList.add('visible'); // Показываем изображение
                }, 2000); // Задержка 2 секунды
            }
        }
    }

    // Назначаем обработчики для перетаскиваемых элементов
    draggableElements.forEach((element, index) => {
        element.id = 'part-' + index;
        element.setAttribute('draggable', true);

        element.addEventListener('dragstart', dragStart);
        element.addEventListener('dragend', dragEnd);
    });

    // Назначаем обработчики для зоны бросания
    dropZone.addEventListener('dragover', dragOver);
    dropZone.addEventListener('drop', drop);
});

//галерея
document.addEventListener('DOMContentLoaded', function() {
    const galleryTrack = document.querySelector('.gallery-track');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Функция для дублирования элементов, чтобы создать непрерывную ленту
    function duplicateElements() {
        let trackWidth = 0;
        galleryItems.forEach(item => {
            trackWidth += item.offsetWidth + parseInt(window.getComputedStyle(item).getPropertyValue('margin-left')) + parseInt(window.getComputedStyle(item).getPropertyValue('margin-right'));
        });

        const containerWidth = document.querySelector('.gallery-container').offsetWidth;

        // Дублируем элементы до тех пор, пока ширина ленты не станет больше ширины контейнера
        while (trackWidth < containerWidth * 2) { // Увеличиваем множитель, чтобы лента была достаточно длинной
            galleryItems.forEach(item => {
                const clone = item.cloneNode(true);
                galleryTrack.appendChild(clone);
                trackWidth += item.offsetWidth + parseInt(window.getComputedStyle(item).getPropertyValue('margin-left')) + parseInt(window.getComputedStyle(item).getPropertyValue('margin-right'));
            });
        }
    }

    duplicateElements();
});