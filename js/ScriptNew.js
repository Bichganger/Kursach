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
// Описания для каждого слайда
const slideDescriptions = [
  {
    title: "Роскошный интерьер",
    text: "Эксклюзивная отделка салона с кожаными сиденьями Merino и алюминиевыми вставками",
    features: [
      "Кожа Merino премиум-класса",
      "Эргономичные спортивные сиденья с подогревом",
      "Панорамная стеклянная крыша",
      "4-зонный климат-контроль"
    ]
  },
  {
    title: "Инновационные технологии",
    text: "Передовые системы для комфорта и безопасности",
    features: [
      "Цифровая приборная панель 12.3\"",
      "Проекционный дисплей",
      "Премиум аудиосистема Harman Kardon",
      "Пакет驾驶ассистентов"
    ]
  },
  {
    title: "Агрессивный экстерьер",
    text: "Узнаваемый спортивный дизайн с элементами M Performance",
    features: [
      "Характерные воздухозаборники",
      "19\" легкосплавные диски M",
      "Четырехтрубная выхлопная система",
      "Адаптивные LED-фары"
    ]
  },
  {
    title: "Непревзойденная динамика",
    text: "Идеальный баланс мощности и управляемости",
    features: [
      "4.4 л V8 Biturbo 625 л.с.",
      "Разгон 0-100 км/ч за 3.3 с",
      "Активная подвеска M Adaptive",
      "Керамические тормоза"
    ]
  }
];

// Обновление описания при смене слайда
document.getElementById('carouselExampleSlidesOnly').addEventListener('slid.bs.carousel', function(event) {
  const activeSlide = this.querySelector('.carousel-item.active');
  const slideIndex = parseInt(activeSlide.getAttribute('data-index'));
  updateSlideDescription(slideIndex);
});

// Функция обновления описания
function updateSlideDescription(index) {
  const desc = slideDescriptions[index];
  document.getElementById('description-title').textContent = desc.title;
  document.getElementById('description-text').textContent = desc.text;
  
  const featuresList = document.getElementById('description-list');
  featuresList.innerHTML = '';
  desc.features.forEach(feature => {
    const li = document.createElement('li');
    li.textContent = feature;
    featuresList.appendChild(li);
  });
}

// Инициализация первого описания
updateSlideDescription(0);

// Таймер обратного отсчета
function updateCountdown() {
  const countdown = document.getElementById('countdown');
  let [hours, minutes, seconds] = countdown.textContent.split(':').map(Number);
  
  seconds--;
  
  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }
  
  if (minutes < 0) {
    minutes = 59;
    hours--;
  }
  
  if (hours < 0) {
    hours = 23;
    minutes = 59;
    seconds = 59;
  }
  
  countdown.textContent = 
    `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

setInterval(updateCountdown, 1000);


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
    function getRuTubeVideoId(url) {
      // Для ссылок вида: https://rutube.ru/video/6b9a3b7f5e6d4c3b2a1f0e5d4c3b2a1/
      const regExp1 = /rutube\.ru\/video\/([a-f0-9]+)\/?/i;
      // Для ссылок вида: https://rutube.ru/play/embed/12345678
      const regExp2 = /rutube\.ru\/play\/embed\/(\d+)/i;
      
      const match1 = url.match(regExp1);
      const match2 = url.match(regExp2);
      
      return match1 ? match1[1] : (match2 ? match2[1] : null);
    }
  
    const videoCover = document.getElementById('videoCover');
    const videoFrame = document.getElementById('videoFrame');
    const showVideoBtn = document.getElementById('showVideo');
    const engineSound = document.getElementById('engineSound');
    const bmwImage = document.querySelector('.bmw-image');
    const speedLines = document.querySelector('.speed-lines');
    
    // Ваша ссылка на RuTube видео
    const rutubeUrl = "https://rutube.ru/video/cb71a858ede065be101d4adff66f3491/"; 
    
    // Эффект при наведении на видео
    videoCover.addEventListener('mouseenter', function() {
      this.querySelector('.bmw-3d-container').style.transform = 'translateZ(20px)';
      bmwImage.style.transform = 'scale(1.05)';
      speedLines.style.opacity = '0.3';
    });
    
    videoCover.addEventListener('mouseleave', function() {
      this.querySelector('.bmw-3d-container').style.transform = 'translateZ(0)';
      bmwImage.style.transform = 'scale(1)';
      speedLines.style.opacity = '0';
    });
    
    // Запуск видео с эффектом
    showVideoBtn.addEventListener('click', function(e) {
      e.preventDefault();
      
      if (this.classList.contains('starting')) return;
      this.classList.add('starting');
      
      // Извлекаем ID видео
      const videoId = getRuTubeVideoId(rutubeUrl);
      if (!videoId) {
        console.error("Ошибка: неверный формат RuTube ссылки");
        this.textContent = "Ошибка загрузки видео";
        return;
      }
  
      // Формируем embed-ссылку для RuTube
      const embedUrl = `https://rutube.ru/play/embed/${videoId}?autoplay=1`;
      
      this.innerHTML = '<span class="btn-text">Запуск двигателя...</span>';
      engineSound.currentTime = 0;
      engineSound.play();
      videoCover.style.animation = 'engineStart 1s 2';
      
      // Эффекты скорости
      setTimeout(() => {
        speedLines.style.opacity = '0.7';
        setTimeout(() => speedLines.style.opacity = '0', 300);
        
        setTimeout(() => {
          speedLines.style.opacity = '0.5';
          setTimeout(() => speedLines.style.opacity = '0', 500);
        }, 400);
      }, 300);
      
      // Запуск видео после эффектов
      setTimeout(() => {
        videoCover.style.visibility = 'hidden';
        videoFrame.src = embedUrl;
        videoFrame.src = embedUrl;
        videoFrame.style.position = 'absolute';
        videoFrame.style.top = '0';
        videoFrame.style.left = '0';
        videoFrame.style.width = '100%';
        videoFrame.style.height = '100%';
        videoFrame.style.zIndex = '10';
        videoCover.style.opacity = '0';
        videoCover.style.pointerEvents = 'none';
        this.innerHTML = '<span class="btn-text">Двигатель запущен</span>';
      }, 2500);
    });
    
    // Анимация цифр
    const specs = {
      hp: { value: 0, target: 617, element: document.getElementById('hpValue') },
      speed: { value: 0, target: 3.4, element: document.getElementById('speedValue') },
      torque: { value: 0, target: 750, element: document.getElementById('torqueValue') }
    };
    
    const animateSpecs = () => {
      let completed = true;
      
      for (const key in specs) {
        const spec = specs[key];
        if (spec.value < spec.target) {
          spec.value += Math.ceil(spec.target / 50);
          if (spec.value > spec.target) spec.value = spec.target;
          spec.element.textContent = key === 'speed' ? spec.value.toFixed(1) : spec.value;
          completed = false;
        }
      }
      
      if (!completed) {
        requestAnimationFrame(animateSpecs);
      }
    };
    
    // Запускаем анимацию цифр при появлении секции
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateSpecs();
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    
    observer.observe(document.querySelector('.bmw-power-section'));
  });