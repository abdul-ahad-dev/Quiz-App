
// User Information Page


const form = document.querySelector('.form');
const startBtn = document.querySelector('#start-btn');
const quizAppBox = document.getElementById('question-container');


const quizCategory = {
    HTML: htmlQuestions,
    CSS: cssQuestions,
    BootStrap: bootstrapQuestions,
    "JS Level 1": jsLevel1Questions,
    "JS Level 2": jsLevel2Questions,
    "JS Level 3": jsLevel3Questions
};

const questions = [];
let questionAnswer = [];

let questionBox = document.getElementById('question');

let optionA = document.getElementById('option-a');
let optionB = document.getElementById('option-b');
let optionC = document.getElementById('option-c');
let optionD = document.getElementById('option-d');


let prevBtn = document.getElementById('prev-btn');
let nextBtn = document.getElementById('next-btn');
let submitBtn = document.getElementById('submit');


let questionNo = 0;
let widthLength = 10

let counterLine = document.getElementById('counter-line');
let questionNumberBox = document.getElementById('question-no');


let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let sec = 0;
let mint = 5;


startBtn.addEventListener('click', (e) =>
{
    e.preventDefault();

    const name = document.querySelector('#name-field').value;
    const rollNo = document.querySelector('#roll-no-field').value;
    const categories = document.querySelectorAll('input[name="category"]');
    let category;

    categories.forEach((radio) =>
    {
        if (radio.checked) {
            category = radio.nextElementSibling.textContent;
        }
    });

    localStorage.setItem('name', name);
    localStorage.setItem('rollNo', rollNo);
    localStorage.setItem('category', category);

    console.log(`Name: ${name}`);
    console.log(`Roll No: ${rollNo}`);
    console.log(`Category: ${category}`);

    let informContainer = document.getElementById('information');
    let quizTestCategory = document.getElementById('quiz-test-category');


    console.log(optionA.textContent);

    setTimeout(() =>
    {
        if (name.trim() !== '' && !isNaN(parseFloat(rollNo)) && category !== '') {
            informContainer.style.display = 'none';
            quizAppBox.style.display = 'block';

            for (const key in quizCategory) {
                if (category === key) {
                    quizTestCategory.textContent = category
                    questions.push(quizCategory[key])

                    questionBox.textContent = questions[0][0].question;
                    optionA.textContent = questions[0][0].options[0];
                    optionB.textContent = questions[0][0].options[1];
                    optionC.textContent = questions[0][0].options[2];
                    optionD.textContent = questions[0][0].options[3];

                    counterLine.style.width = '10%';


                }
            }
        }
    }, 1000)
});



nextBtn.addEventListener('click', () =>
{
    if (questionNo < questions[0].length - 1) {
        widthLength += 10
        counterLine.style.width = `${widthLength}%`
        questionNo++;
        questionNumberBox.textContent = `${questionNo + 1}/10`
        updateQuestion();
    }
})

submitBtn.addEventListener('click', () =>
{
    if (questionNo === questions[0].length - 1) {
        quizAppBox.style.display = 'none'
    } else {
        widthLength += 10
        counterLine.style.width = `${widthLength}%`
        questionNo++;
        questionNumberBox.textContent = `${questionNo + 1}/10`
        updateQuestion();
    }
})

prevBtn.addEventListener('click', () =>
{
    if (questionNo > 0) {
        widthLength -= 10
        counterLine.style.width = `${widthLength}%`
        questionNo--;
        questionNumberBox.textContent = `${questionNo + 1}/10`
        updateQuestion();
    }
})


function updateQuestion()
{
    questionBox.textContent = questions[0][questionNo].question;
    optionA.textContent = questions[0][questionNo].options[0];
    optionB.textContent = questions[0][questionNo].options[1];
    optionC.textContent = questions[0][questionNo].options[2];
    optionD.textContent = questions[0][questionNo].options[3];
}




let timeUpdateInterval = setInterval(() =>
{
    sec++;
    if (sec > 59) {
        sec = 0;
        mint--;
    }

    minutes.textContent = mint;
    seconds.textContent = sec

    if (mint === 0 && sec === 0) {
        clearInterval(timeUpdateInterval);
    }
}, 100);