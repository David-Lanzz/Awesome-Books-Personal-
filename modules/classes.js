/* eslint-disable */

import { bookList} from './variables.js';

export class Books {
  constructor(bookTitle, arthur, id) {
    this.bookTitle = bookTitle,
    this.arthur = arthur,
    this.id = id;
  }
}

export class BookObj {
    static bookObj = [];

    static createList() {
      for (let i = 0; i < BookObj.bookObj.length; i++) {
        let listsbooks = '';
        BookObj.bookObj[i].id = (i + 1).toString();
        const book = document.createElement('li');
        book.id = (i + 1).toString();
        const paragraph = document.createElement('p');
        const span1 = document.createElement('span');
        span1.innerHTML = BookObj.bookObj[i].bookTitle;
        const span2 = document.createElement('span');
        span2.innerHTML = BookObj.bookObj[i].arthur;
        paragraph.appendChild(span1);
        paragraph.appendChild(span2);
        book.appendChild(paragraph);
        const remove = document.createElement('button');
        remove.innerHTML = 'Remove';
        remove.id = 'removebutton';
        book.appendChild(remove);
        listsbooks = book;
        bookList.appendChild(listsbooks);
      }
    }

    static removeBook(id) {
      let filteredArr = '';
      filteredArr = BookObj.bookObj.filter((item) => item.id != id);
      console.log(filteredArr);
      BookObj.bookObj = filteredArr;
      bookList.innerHTML = '';
      BookObj.createList();
      localStorage.setItem('inputArr', JSON.stringify(BookObj.bookObj));
    }
}
