'Use strict';
//наработки на главный экран
document.addEventListener('DOMContentLoaded', function() {
    const parts = document.querySelectorAll('.draggable');
    const dropZone = document.getElementById('dropZone');
    const finalImageContainer = document.getElementById('finalImageContainer');
    const successMessage = document.querySelector('.success-message');
    const applyMessage = document.getElementById('applyMessage');
    const partsAreaContainer = document.getElementById('partsAreaContainer');
    const dropZoneContainer = document.getElementById('dropZoneContainer');

    let draggedParts = 0;

    parts.forEach(part => {
        part.addEventListener('dragstart', function(e) {
            e.dataTransfer.setData('text/plain', e.target.dataset.part);
        });
    });

    dropZone.addEventListener('dragover', function(e) {
        e.preventDefault();
    });

    dropZone.addEventListener('drop', function(e) {
        e.preventDefault();
        const partType = e.dataTransfer.getData('text/plain');
        const draggedElement = document.querySelector(`[data-part="${partType}"]:not(.dragged)`);

        if (draggedElement) {
            // Удаляем деталь из левого блока
            draggedElement.remove();
            draggedParts++;

            // Показываем сообщение об успешном добавлении
            successMessage.style.display = 'block';
            setTimeout(() => {
                successMessage.style.display = 'none';
                applyMessage.style.display = 'block';
                setTimeout(() => {
                    applyMessage.style.display = 'none';

                    // Если все детали перетащены
                    if (draggedParts === parts.length) {
                        // Скрываем блоки с деталями и зоной для перетаскивания
                        partsAreaContainer.style.display = 'none';
                        dropZoneContainer.style.display = 'none';

                        // Показываем финальное изображение
                        finalImageContainer.style.display = 'block';
                    }
                }, 1000);
            }, 1000);
        }
    });
});

//Карточки
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        card.style.setProperty('--rotate-x', `${rotateX}deg`);
        card.style.setProperty('--rotate-y', `${rotateY}deg`);
    });

    card.addEventListener('mouseleave', () => {
        card.style.setProperty('--rotate-x', '0deg');
        card.style.setProperty('--rotate-y', '0deg');
    });
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
const descriptions = [
    {
        title: "Роскошный интерьер",
        text: "Испытайте непревзойденный комфорт благодаря высококачественным материалам и передовым технологиям.",
        list: ["Кожаные сиденья", "Панорамная крыша", "Цифровая приборная панель"]
    },
    {
        title: "Современный дизайн",
        text: "Интерьер, сочетающий в себе элегантность и инновации.",
        list: ["Светодиодная подсветка", "Умный климат-контроль", "Качественная отделка"]
    },
    {
        title: "Динамичный экстерьер",
        text: "Спортивный и агрессивный дизайн, который привлекает внимание.",
        list: ["Аэродинамические линии", "Светодиодные фары", "Спортивные диски"]
    },
    {
        title: "Мощь и стиль",
        text: "Экстерьер, который подчеркивает характер и производительность.",
        list: ["Широкие колесные арки", "Двойная выхлопная система", "Спойлер"]
    }
];

function updateDescription(index) {
    const description = descriptions[index];
    document.getElementById('description-title').textContent = description.title;
    document.getElementById('description-text').textContent = description.text;

    const list = document.getElementById('description-list');
    list.innerHTML = '';
    description.list.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('carouselExampleSlidesOnly');
    carousel.addEventListener('slid.bs.carousel', function(event) {
        const activeIndex = event.to;
        updateDescription(activeIndex);
    });

    updateDescription(0);
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