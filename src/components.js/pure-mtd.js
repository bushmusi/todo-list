export const getActiveItem = (item) => {
  const val = item.path[1].constructor.name;
  const element = val === 'HTMLLabelElement' ? item.path[1].id : item.path[0].id;
  return element;
};

export const getCurrentDomVal = (id) => {
  const checkbox = document.getElementById(`checkbox-${id}`);
  const checkboxVal = checkbox.checked;

  const descElement = document.getElementById(`text-id-${id}`);
  const desc = descElement.textContent;
  return [checkboxVal, desc];
};

export const fetchCurrentItems = (id) => {
  const [checked, desc] = getCurrentDomVal(id);
  const summarizObj = {
    description: desc,
    completed: checked,
    index: id,
  };

  return summarizObj;
};

export const updateCheckboxDom = (id) => {
  const element = document.getElementById(`text-id-${id}`);
  const textDecor = element.style.textDecoration;
  element.style.textDecoration = textDecor === 'line-through' ? 'none' : 'line-through';
  return element.style.textDecoration;
};

export const updateListDom = (obj) => {
  const li = document.getElementById(`li-${obj.index}`);
  li.className = 'todo-item';
  li.style.display = 'flow-root';

  const label = document.getElementById(`label-${obj.index}`);
  label.className = 'label-item';

  const textInput = document.getElementById(`edit-${obj.index}`);

  const textTag = document.createElement('h4');
  textTag.id = `text-id-${obj.index}`;
  textTag.textContent = `${obj.description}`;
  textTag.style.textDecoration = obj.completed ? 'line-through' : 'none';
  textInput.replaceWith(textTag);

  const trashIcon = document.getElementById(`option-${obj.index}`);
  const optIcon = document.createElement('i');
  optIcon.id = `option-${obj.index}`;
  optIcon.classList = 'fa fa-ellipsis-v option-menu';
  optIcon.innerHTML = ' ';
  trashIcon.replaceWith(optIcon);

  return [textTag, optIcon];
};

export const getLocalStorage = () => {
  let todoList = [];
  try {
    todoList = JSON.parse(localStorage.getItem('todo-list'));
  } catch (e) {
    throw new Error(`Error occured: ${e}`);
  }
  return todoList;
};

export const makeEditable = (id) => {
  const activeItems = document.querySelectorAll('.active-li');
  activeItems.forEach((item) => item.classList.toggle('active-li'));
  const activeLabels = document.querySelectorAll('.label-item-edit');
  activeLabels.forEach((item) => {
    item.className = 'label-item';
  });

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
  label.id = `label-${index}`;
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

  return [textInput, checkbox, trashIcon];
};

export const multipleDelete = () => {
  const checkedItems = document.querySelectorAll('input[type=checkbox]:checked');
  const filtIds = [];
  checkedItems.forEach((item, index) => {
    const [, id] = item.id.split('-');
    filtIds.push(+id);
  });
  let itemList = [];
  itemList = getLocalStorage();
  itemList = itemList.filter((val, index) => filtIds.indexOf(val.index) === -1);
  itemList.forEach((val, index) => {
    val.index = index + 1;
  });
  localStorage.setItem('todo-list', JSON.stringify(itemList));
  return checkedItems;
};