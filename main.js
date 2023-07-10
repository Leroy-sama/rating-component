const buttons = document.querySelectorAll('.btn-field button');
const submitBtn = document.querySelector('.sbt-btn');
const resultbox = document.querySelector('.choicebox');
const container = document.querySelector('.container');
const container2 = document.querySelector('.container2');

buttons.forEach(function(button) {
    button.addEventListener('click', e => {
        resultbox.textContent = `You selected ${button.textContent} out of 5`;
    })
})

submitBtn.addEventListener('click', e => {
    e.preventDefault();
    console.log(resultbox.textContent);
    container.classList.add('hide');
    container2.classList.remove('hide');
})
