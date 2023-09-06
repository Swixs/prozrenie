const slider = document.getElementById("mySlider");
const sliderValue = document.getElementById("sliderValue");

// Обработчик изменения значения ползунка
slider.addEventListener("input", function() {
    sliderValue.innerText = slider.value;
});