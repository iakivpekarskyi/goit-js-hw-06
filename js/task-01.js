// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


// const catEl = document.getElementById('categories');
// const titles = catEl.children.length;
// console.log('Number of categories:', titles);


// const headElOne = document.querySelector('.item');
// const nameListOne = headElOne.firstElementChild;
// const navEl = headElOne.lastElementChild;
// const chil = navEl.children.length;
// console.log('Category:', nameListOne.textContent);
// console.log('Elements:', chil);


// const bigUl = document.getElementById('categories');
// const childrenUl = bigUl.children;
// const childUl = childrenUl[0];
// const oneLength = childUl.lastElementChild.length;
// console.log('Category:', childUl.firstElementChild.textContent);
// console.log('Elements:', oneLength);


// const two = childrenUl[1];
// const twoLength = two.lastElementChild.length;
// console.log('Category:', two.firstElementChild.textContent);
// console.log('Elements:', twoLength);

// const three = childrenUl[2];
// const threeLength = three.lastElementChild.length;
// console.log('Category:', three.firstElementChild.textContent);
// console.log('Elements:',threeLength );




const list = document.querySelectorAll('li.item');
console.log(`Number of categories: ${list.length}`);

for(const item of list){
   const firstChild = item.firstElementChild.textContent;
   const lastChild = item.lastElementChild.children.length;
console.log(`Category: ${firstChild}\nElements: ${lastChild}`);
}
