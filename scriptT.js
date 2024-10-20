document.getElementById('calculateBtn').addEventListener('click', function() {
    const sideA = document.getElementById('sideA').value;
    const sideB = document.getElementById('sideB').value;
    const sideC = document.getElementById('sideC').value;

    let isValid = true;

    // Перевірка введених значень
    if (!sideA || isNaN(sideA) || sideA <= 0) {
        document.getElementById('errorA').textContent = 'Некоректне значення для сторони A';
        document.getElementById('errorA').style.visibility = 'visible';
        isValid = false;
    } else {
        document.getElementById('errorA').style.visibility = 'hidden';
    }

    if (!sideB || isNaN(sideB) || sideB <= 0) {
        document.getElementById('errorB').textContent = 'Некоректне значення для сторони B';
        document.getElementById('errorB').style.visibility = 'visible';
        isValid = false;
    } else {
        document.getElementById('errorB').style.visibility = 'hidden';
    }

    if (!sideC || isNaN(sideC) || sideC <= 0) {
        document.getElementById('errorC').textContent = 'Некоректне значення для сторони C';
        document.getElementById('errorC').style.visibility = 'visible';
        isValid = false;
    } else {
        document.getElementById('errorC').style.visibility = 'hidden';
    }

    // Якщо всі значення валідні, обчислюємо периметр
    if (isValid) {
        const perimeter = parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC);
        document.getElementById('result').textContent = `Периметр трикутника: ${perimeter}`;
    }
});

// Очистка форми
document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('perimeterForm').reset();
    document.getElementById('result').textContent = '';
    document.querySelectorAll('.error-message').forEach(error => error.style.visibility = 'hidden');
});
