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
