function calculateMean() {
    const input = document.getElementById('numbers').value;
    const numbers = input.split(',').map(Number);
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const mean = sum / numbers.length;

    document.getElementById('result').innerText = `Arithmetic Mean: ${mean.toFixed(2)}`;
}