const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    const bmi = ((height * height) / weight).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    document.getElementById('infos').classList.remove('hidden');

    value.classList.add('attention');

    if (bmi < 18.5) {
        description = 'Cuidado! Você está abaixo do seu peso ideal!'
        value.classList.add('attention');
        value.classList.remove('normal');
    }else if (bmi >= 18.5 && bmi <= 25) {
        description = "Você está no peso ideal. Parabéns!";
        value.classList.add('normal');
        value.classList.remove('attention');
    }else if (bmi > 25 && bmi <= 30) {
        description = " Cuidado! Você está com sobrepeso!";
        value.classList.add('attention');
        value.classList.remove('normal');
    }else if (bmi > 30 && bmi <= 35) {
        description = " Cuidado! Você está com obesidade nivel I!";
        value.classList.add('attention');
        value.classList.remove('normal');
    }else if (bmi > 35 && bmi <= 40) {
        description = " Cuidado! Você está com obesidade nivel II!";
        value.classList.add('attention');
        value.classList.remove('normal');
    }else {
        description = " Cuidado! Você está com obesidade nivel III!";
        value.classList.add('attention');
        value.classList.remove('normal');
    }

    value.textContent = bmi;
    document.getElementById('description').textContent=description;
});