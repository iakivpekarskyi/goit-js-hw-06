// Задание 4
// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.




const subBtn = document.querySelector('[data-action="decrement"]');
const addBtn = document.querySelector('[data-action="increment"]');
const counter = document.querySelector('#value');


let counterValue = 0;

subBtn.addEventListener('click', () => {
	counterValue-=1;
	counter.textContent = counterValue
});

addBtn.addEventListener('click', () => {
	counterValue+=1;
	counter.textContent = counterValue
});


//             ????????????????     ПИТАННЯ   ???????????????

// ----------------------------------------------------------------------
// 1. data-action="decrement" . - потрібен був, щоб достучатися до кнопок чи його треба було якось інакше використати? 
// 2. Як тут можливо застосувати функцію forEach, щоб додати addEventListener до кнопок з різними функціями.

//----------------------------------------------------------------------
















// 1. get the elements from HTML; 
// 2. Add event listener on buttons. + create fucntion that will add value to the counter. 



// const buttons = document.querySelectorAll("button");

// buttons.forEach(button => {
//    button.addEventListener("click", onClick);
// })










