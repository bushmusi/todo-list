import addVal from './components.js/add-val.js';
import domElement from './components.js/append-li.js';
import deleteLi from './components.js/delete-val.js';
import {
  getActiveItem, makeEditable,
  updateCheckboxDom, updateListDom, getLocalStorage,
} from './components.js/pure-mtd.js';

export default class Todo {
  constructor() {
    this.form = document.getElementById('form-field');
    this.todoInputBox = document.getElementById('input-field');
  }

  itemList = () => {
    let todoList = [];
    todoList = getLocalStorage();
    todoList = todoList === null ? [] : todoList;
    const prevList = document.querySelectorAll('.todo-item');
    prevList.forEach((item) => item.remove());

    todoList.forEach((item) => {
      const [label, optIcon, checkBox] = domElement(item);
      optIcon.addEventListener('click', this.editDelete);
      checkBox.addEventListener('click', (event) => {
        this.updateItem({ event, type: 'checkbox' });
      });
      label.addEventListener('click', this.editDelete);
    });
  };

  updateItem = ({ event, type }) => {
    let currentList = [];
    currentList = getLocalStorage();

    currentList = currentList === null ? [] : currentList;

    const currentInboxID = event.srcElement.id;
    const [, id] = currentInboxID.split('-');

    const currentElement = currentList.filter((val, index) => val.index === +id);
    const currentElementIndex = currentList.indexOf(currentElement[0]);

    const newObj = {
      description: type === 'text' ? event.srcElement.value : currentElement[0].description,
      index: currentElement[0].index,
      completed: type !== 'text' ? event.srcElement.checked : currentElement[0].completed,
    };
    currentList[currentElementIndex] = newObj;
    localStorage.setItem('todo-list', JSON.stringify(currentList));

    if (type === 'checkbox') {
      updateCheckboxDom(id);
    } else {
      const itemElements = updateListDom(newObj);
      itemElements.forEach((item) => item.addEventListener('click', this.editDelete));
    }
  }

  deleteItem = (event) => {
    let [, id] = event.srcElement.id.split('-');
    id = +id;
    deleteLi(id);
    const liItem = document.getElementById(`li-${id}`);
    liItem.remove();
  }

  editDelete = (e) => {
    const eventId = getActiveItem(e);
    let id = '';
    [, id] = eventId.split('-');

    const [textInput, checkbox, trashIcon] = makeEditable(id);

    textInput.addEventListener('mouseout', (event) => {
      this.updateItem({ event, type: 'text' });
    });

    checkbox.addEventListener('click', (event) => {
      this.updateItem({ event, type: 'checkbox' });
    });

    trashIcon.addEventListener('click', (event) => {
      this.deleteItem(event);
    });

    return true;
  }

  addElement = (e) => {
    e.preventDefault();
    const val = this.form.elements.desc.value;
    const objItem = addVal(val);
    this.todoInputBox.value = '';
    const [label, optIcon, checkBox] = domElement(objItem);

    checkBox.addEventListener('click', (event) => {
      this.updateItem({ event, type: 'checkbox' });
    });
    optIcon.addEventListener('click', this.editDelete);
    label.addEventListener('click', this.editDelete);
  };
}
