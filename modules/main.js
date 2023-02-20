/* eslint-disable */
import { BookObj } from "./classes.js";
import { Books } from "./classes.js";
import { bookList } from "./variables.js"
import { addBtn } from "./variables.js"
import { title } from "./variables.js"
import { arthur } from "./variables.js"
import { header } from "./variables.js"
import { listTab } from "./variables.js"
import { contactTab } from "./variables.js"
import { outputArr } from "./variables.js";
 import { addNewTab } from "./variables.js";
 import { DateTime } from "./luxon.js";
import { time } from "./variables.js"

const date = new Date()
time.textContent = `${date.toDateString()}`
setInterval(()=> {
  const date = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS)
  time.textContent = `${date}`
},1000)

window.setInterval(BookObj.date,1000)
 header.addEventListener('click',(e) => {
 if(e.target.id === 'listTab') {
  addNewTab.classList.add('removeDisplay')
  contactTab.classList.add('removeDisplay')
  listTab.classList.remove('removeDisplay')
 }
 else if(e.target.id === 'addNewTab') {
   addNewTab.classList.remove('removeDisplay')
   listTab.classList.add('removeDisplay')
  contactTab.classList.add('removeDisplay')
 }
 else if(e.target.id === 'contactTab') {
   contactTab.classList.remove('removeDisplay')
   listTab.classList.add('removeDisplay')
  addNewTab.classList.add('removeDisplay')
 }
 })

 addBtn.addEventListener('click', () => {
   if (title.value) {
     const titleValue = title.value;
     const arthurValue = arthur.value;
      title.value = '';
      arthur.value = '';
     const newBook = new Books(titleValue,arthurValue)
     BookObj.bookObj.push(newBook)
     bookList.innerHTML = ''
     BookObj.createList()
     localStorage.setItem('inputArr', JSON.stringify(BookObj.bookObj));
   }
 });
 
 window.addEventListener('click',(e) => {
  if(e.target.id == 'removebutton'){
   BookObj.removeBook(e.target.parentNode.id)
  }
 })

 let filteredArr = '';

 if (outputArr) {
   BookObj.bookObj = outputArr;
   console.log(BookObj.bookObj)
  BookObj.createList()
 } else if (filteredArr) {
   BookObj.bookObj = filteredArr;
   BookObj.loop()
 }
