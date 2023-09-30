const slider = document.getElementById("mySlider");
const sliderValue = document.getElementById("sliderValue");

sliderValue.innerHTML = "0";
// Обработчик изменения значения ползунка
slider.addEventListener("input", function() {     
    sliderValue.innerHTML = slider.value === "0"
        ? "0"
        : `${slider.value} 000`
});

