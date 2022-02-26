import './style.css';
import Todo from './add-remove.js';

const addRemoveObj = new Todo();
const { form } = addRemoveObj;
form.addEventListener('submit', addRemoveObj.addElement);
addRemoveObj.itemList();
addRemoveObj.todoInputBox.focus();

const refreshIcon = document.getElementById('refresh-link');
refreshIcon.addEventListener('click', () => addRemoveObj.itemList());

const multipleDelete = (event) => {
  const checkedItems = document.querySelectorAll('input[type=checkbox]:checked');
  const filtIds = [];
  checkedItems.forEach((item, index) => {
    const [, id] = item.id.split('-');
    filtIds.push(parseInt(id, 10));
  });
  let itemList = JSON.parse(localStorage.getItem('todo-list'));
  itemList = itemList.filter((val, index) => filtIds.indexOf(val.index) === -1);
  itemList.forEach((val, index) => {
    val.index = index + 1;
  });
  localStorage.setItem('todo-list', JSON.stringify(itemList));

  addRemoveObj.itemList();
};

const clearAllElement = document.getElementById('clear-completed');
clearAllElement.addEventListener('click', (event) => {
  multipleDelete(event);
});