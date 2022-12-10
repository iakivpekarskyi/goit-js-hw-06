// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;};

const boxContainer = document.querySelector('#boxes');
const amount = document.querySelector('number'));
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');



// створюю змінну newBox(це буде новий div), яка буде створюватися по натисканню.

const div = document.createElement('div') 
div.style.width = '30px';
div.style.height = '30px';
div.style.backgroundColor = getRandomHexColor();


// вішаю слухач на кнопку, яка буде додавати div до html.

btnCreate.addEventListener('click', onClick => {
  boxContainer.appendChild(div);
});

// вішаю слухач на кнопку, яка буде видаляти div з html.


btnDestroy.addEventListener('click', onClick => {
  boxContainer.remove(div);
});
// Це наброски... може пізніше дороблю...


        //  ПИТАННЯ!
// Не розумію, як створити функцію, яка по одному кліку буде створювати багато div обїектів?

// І як в інпут додати значення value, щоб туди записувалось amount





