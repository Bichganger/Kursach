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
    const partsAreaContainer = document.getElementById('partsAreaContainer');
    const dropZoneContainer = document.getElementById('dropZoneContainer');
    const finalImageContainer = document.getElementById('finalImageContainer');
    const draggableElements = document.querySelectorAll('.draggable');
    let partsCount = 0;
    const totalParts = draggableElements.length;

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
        const id = event.dataTransfer.getData('text/plain');
        const draggedElement = document.getElementById(id);

        if (draggedElement && !draggedElement.classList.contains('hidden')) {
            draggedElement.classList.add('hidden');

            partsCount++;
            if (partsCount === totalParts) {
                // Скрываем контейнеры с деталями и зоной перетаскивания
                partsAreaContainer.style.display = 'none';
                dropZoneContainer.style.display = 'none';

                // Показываем контейнер с финальным изображением
                finalImageContainer.style.display = 'block'; // Или 'block'
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

/*Слайдер2*/
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('carouselExampleSlidesOnly');
    const carouselInner = carousel.querySelector('.carousel-inner');
    const carouselItems = carouselInner.querySelectorAll('.carousel-item');
    const descriptionTitle = document.getElementById('description-title');
    const descriptionText = document.getElementById('description-text');
    const descriptionList = document.getElementById('description-list');
    const sliderContainer = document.querySelector('.slider-container');
    const descriptionContainer = document.querySelector('.description-container');

    // Описания для слайдов
    const descriptions = [
        {
            title: 'Интерьер BMW M5',
            text: 'Современный и роскошный интерьер.',
            list: ['Премиальная кожа', 'Спортивные сиденья', 'Цифровая приборная панель']
        },
        {
            title: 'Детали интерьера',
            text: 'Изысканные детали и отделка.',
            list: ['Высококачественные материалы', 'Эргономичный дизайн']
        },
        {
            title: 'Экстерьер BMW M5',
            text: 'Агрессивный и динамичный внешний вид.',
            list: ['Спортивный обвес', 'Легкосплавные диски', 'Фирменная решетка радиатора']
        },
        {
            title: 'Дизайн экстерьера',
            text: 'Элегантность и мощь в каждой линии.',
            list: ['Выразительная оптика', 'Аэродинамические элементы']
        }
    ];

    let currentIndex = 0; // Текущий индекс слайда
    const slideDuration = 5000; // Уменьшаем до 3 секунд

    // Функция для обновления описания с анимацией
    function updateDescription(index) {
        // Анимируем исчезновение старого описания
        descriptionContainer.classList.add('fade-out');

        // После исчезновения меняем описание и анимируем появление
        setTimeout(() => {
            const description = descriptions[index];
            descriptionTitle.textContent = description.title;
            descriptionText.textContent = description.text;
            descriptionList.innerHTML = ''; // Очищаем список

            description.list.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                descriptionList.appendChild(li);
            });

            descriptionContainer.classList.remove('fade-out');
            descriptionContainer.classList.add('fade-in');
        }, 500); // Пауза перед сменой описания
    }

    // Функция для переключения слайда с анимацией
    function showSlide(index) {
        // Анимируем исчезновение старого слайда
        sliderContainer.classList.add('slide-out');

        // После исчезновения меняем слайд и анимируем появление
        setTimeout(() => {
            // Сначала убираем класс active у всех слайдов
            carouselItems.forEach(item => item.classList.remove('active'));

            // Добавляем класс active только к текущему слайду
            carouselItems[index].classList.add('active');

            sliderContainer.classList.remove('slide-out');
            sliderContainer.classList.add('slide-in');

            // Обновляем описание
            updateDescription(index);

            currentIndex = index; // Обновляем текущий индекс

        }, 500); // Пауза перед сменой слайда
    }

    // Запускаем слайдер вручную
    function startCarousel() {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % carouselItems.length;
            showSlide(currentIndex);
        }, slideDuration);
    }

    startCarousel(); // Запускаем слайдер
});

//анимация галлереи
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.gallery-track');
    const itemWidth = document.querySelector('.gallery-item').offsetWidth + 30; // Ширина элемента + margin
    const trackWidth = track.offsetWidth;
    let currentPosition = 0;

    function animate() {
        currentPosition -= 1,5; // Скорость анимации (можно менять)
        track.style.transform = `translateX(${currentPosition}px)`;

        // Когда доходим до конца, перемещаем в начало
        if (Math.abs(currentPosition) > trackWidth) {
            currentPosition = 0; // Возвращаем в начало
        }

        requestAnimationFrame(animate);
    }

    animate();
});

// Видеообзор
document.addEventListener('DOMContentLoaded', function() {
    const showVideoButton = document.getElementById('showVideo');
    const videoFrame = document.getElementById('videoFrame');
    const videoCover = document.getElementById('videoCover');
    const videoWrapper = document.querySelector('.video-wrapper');
    const videoUrl = 'https://www.youtube.com/watch?v=https://www.youtube.com/watch?v=TP5oj8tnaXA'; // Замените на полную ссылку на видео

    function getYouTubeId(url) {
        const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);

        if (match && match[2].length == 11) {
            return match[2];
        } else {
            return null;
        }
    }

    // Загрузка видео при клике на обложку
    videoCover.addEventListener('click', function() {
        const videoId = getYouTubeId(videoUrl);

        if (videoId) {
            videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            videoWrapper.classList.add('playing'); // Добавляем класс для отображения видео
        } else {
            alert('Не удалось извлечь ID видео из ссылки.');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const videoSection = document.querySelector('.video-section');
    const title = document.querySelector('.interactive-section h2');
    const paragraph = document.querySelector('.interactive-section p');
  
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function checkVideoSectionVisibility() {
      if (isElementInViewport(videoSection)) {
        // Добавляем класс "animate" для запуска анимации
        title.classList.add('animate');
        paragraph.classList.add('animate');
  
        // Отключаем слушатель, чтобы анимация не запускалась повторно
        window.removeEventListener('scroll', checkVideoSectionVisibility);
      }
    }
  
    // Проверяем видимость блока при загрузке страницы
    checkVideoSectionVisibility();
  
    // Проверяем видимость блока при прокрутке страницы
    window.addEventListener('scroll', checkVideoSectionVisibility);
  });