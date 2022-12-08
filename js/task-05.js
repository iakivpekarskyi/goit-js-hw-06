// Задание 5
// Напиши скрипт который, 
// при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener('input', (event) => {
   output.textContent = event.currentTarget.value

   if(event.currentTarget.value === ''){
      output.textContent = 'Anonymous';
   };
});



