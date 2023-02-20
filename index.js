import { BookObj, Books } from './modules/classes.js';

import {
  bookList, addBtn, title, arthur, header, listTab, contactTab, outputArr, addNewTab, time,
} from './modules/variables.js';

import { DateTime } from './modules/luxon.js';

const date = new Date();
time.textContent = `${date.toDateString()}`;
setInterval(() => {
  const date = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  time.textContent = `${date}`;
}, 1000);

window.setInterval(BookObj.date, 1000);
header.addEventListener('click', (e) => {
  if (e.target.id === 'listTab') {
    addNewTab.classList.add('removeDisplay');
    contactTab.classList.add('removeDisplay');
    listTab.classList.remove('removeDisplay');
  } else if (e.target.id === 'addNewTab') {
    addNewTab.classList.remove('removeDisplay');
    listTab.classList.add('removeDisplay');
    contactTab.classList.add('removeDisplay');
  } else if (e.target.id === 'contactTab') {
    contactTab.classList.remove('removeDisplay');
    listTab.classList.add('removeDisplay');
    addNewTab.classList.add('removeDisplay');
  }
});

addBtn.addEventListener('click', () => {
  if (title.value) {
    const titleValue = title.value;
    const arthurValue = arthur.value;
    title.value = '';
    arthur.value = '';
    const newBook = new Books(titleValue, arthurValue);
    BookObj.bookObj.push(newBook);
    bookList.innerHTML = '';
    BookObj.createList();
    localStorage.setItem('inputArr', JSON.stringify(BookObj.bookObj));
  }
});

window.addEventListener('click', (e) => {
  if (e.target.id === 'removebutton') {
    BookObj.removeBook(e.target.parentNode.id);
  }
});

const filteredArr = '';

if (outputArr) {
  BookObj.bookObj = outputArr;
  BookObj.createList();
} else if (filteredArr) {
  BookObj.bookObj = filteredArr;
  BookObj.loop();
}
