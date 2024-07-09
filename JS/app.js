
// User Information Page

const form = document.querySelector('.form');
const startBtn = document.querySelector('#start-btn');

startBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const name = document.querySelector('#name-field').value;
    const rollNo = document.querySelector('#roll-no-field').value;
    const categories = document.querySelectorAll('input[name="category"]');
    let category;

    categories.forEach((radio) => {
        if (radio.checked) {
            category = radio.nextElementSibling.textContent;
        }
    });

    console.log(`Name: ${name}`);
    console.log(`Roll No: ${rollNo}`);
    console.log(`Category: ${category}`);
    
    let informContainer = document.getElementById('information')

    setTimeout(() => {
        if (name.trim() !== '' && !isNaN(parseFloat(rollNo)) && category !== '') {
            informContainer.style.display = 'none';
        }
    }, 1000)
    
});
