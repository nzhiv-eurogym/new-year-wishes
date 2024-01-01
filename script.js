document.addEventListener('DOMContentLoaded', function () {
    const congratulationContainer = document.getElementById('congratulation-text');
    const congratulationBtn = document.getElementById('congratulation-btn');

    congratulationBtn.addEventListener('click', function () {
        loadRandomCongratulation();
    });

    function loadRandomCongratulation() {
        fetch('congratulations.txt')
            .then(response => response.text())
            .then(data => {
                const congratulations = data.split('\n').filter(congratulation => congratulation.trim() !== '');
                const randomCongratulation = getRandomElement(congratulations);
                displayCongratulation(randomCongratulation);
            })
            .catch(error => {
                console.error('Error loading congratulations:', error);
            });
    }

    function getRandomElement(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }

    function displayCongratulation(congratulation) {
        congratulationContainer.textContent = congratulation;
    }
});
