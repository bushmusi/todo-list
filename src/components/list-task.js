import editDelete from './edit-task.js';
import updateItem from './update-task.js';

const itemList = () => {
  const listCont = document.getElementById('list-cont');
  const permaNode = document.querySelectorAll('.prev-item');
  listCont.innerHTML = '';
  permaNode.forEach((item) => listCont.appendChild(item));

  let todoList = [];
  try {
    todoList = JSON.parse(localStorage.getItem('todo-list'));
  } catch (e) {
    throw new Error(`Error occured: ${e}`);
  }
  todoList = todoList === null ? [] : todoList;

  todoList.forEach((item) => {
    const element = document.createElement('li');
    element.className = 'todo-item';
    element.id = `li-${item.index}`;

    const label = document.createElement('label');
    label.id = `label-${item.index}`;
    label.className = 'label-item';

    const inputBox = document.createElement('input');
    inputBox.type = 'checkbox';
    inputBox.className = 'checkbox-item';
    inputBox.id = `checkbox-${item.index}`;
    inputBox.checked = item.completed;

    element.appendChild(inputBox);

    const textTag = document.createElement('h4');
    textTag.id = `text-id-${item.index}`;
    textTag.textContent = `${item.description}`;
    textTag.style.textDecoration = item.completed ? 'line-through' : 'none';
    label.appendChild(textTag);
    label.addEventListener('click', editDelete);
    element.appendChild(label);

    const optIcon = document.createElement('i');
    optIcon.id = `option-${item.index}`;
    optIcon.classList = 'fa fa-ellipsis-v option-menu';
    optIcon.innerHTML = ' ';
    optIcon.addEventListener('click', editDelete);

    element.appendChild(optIcon);
    listCont.appendChild(element);
    inputBox.addEventListener('click', (event) => {
      updateItem({ event, type: 'checkbox' });
    });
  });
};

export default itemList;
