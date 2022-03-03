import fetchCurrentItems from './fetch-current-itask.js';
import deleteItem from './delete-task.js';
import updateItem from './update-task.js';

const getActiveItem = (item) => {
  const val = item.path[1].constructor.name === 'HTMLLabelElement' ? item.path[1].id : item.path[0].id;
  return val;
};

const editDelete = (e) => {
  const eventId = getActiveItem(e);
  let id = '';
  [, id] = eventId.split('-');

  const liID = `li-${id}`;
  const currentLi = document.getElementById(liID);
  currentLi.className = 'todo-item active-li';
  const { description, index, completed } = fetchCurrentItems(id);
  currentLi.innerHTML = '';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox-item';
  checkbox.id = `checkbox-${index}`;
  checkbox.checked = completed;

  const label = document.createElement('label');
  label.className = 'label-item-edit';
  const textInput = document.createElement('input');
  textInput.type = 'text';
  textInput.name = `edit-${index}`;
  textInput.id = `edit-${index}`;
  textInput.className = 'edit-input';
  textInput.value = description;
  label.appendChild(textInput);

  const trashIcon = document.createElement('i');
  trashIcon.id = `option-${index}`;
  trashIcon.className = 'fa fa-trash option-menu';

  [checkbox, label, trashIcon].forEach((item) => currentLi.appendChild(item));
  currentLi.style.display = 'flex';

  textInput.addEventListener('change', (event) => {
    updateItem({ event, type: 'text' });
  });

  checkbox.addEventListener('click', (event) => {
    updateItem({ event, type: 'checkbox' });
  });

  trashIcon.addEventListener('click', (event) => {
    deleteItem(event);
  });
};

export default editDelete;