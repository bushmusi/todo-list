import './style.css';
import Todo from './todo-controller.js';
import { multipleDelete } from './components.js/pure-mtd.js';

const addRemoveObj = new Todo();
const { form } = addRemoveObj;
form.addEventListener('submit', addRemoveObj.addElement);
addRemoveObj.itemList();
addRemoveObj.todoInputBox.focus();

const refreshIcon = document.getElementById('refresh-link');
refreshIcon.addEventListener('click', () => addRemoveObj.itemList());

const clearAllElement = document.getElementById('clear-completed');
clearAllElement.addEventListener('click', () => {
  multipleDelete();
  addRemoveObj.itemList();
});
