export default class Todo {
  constructor() {
    this.INPUT_ELEMENT = document.getElementById('input-field');
    this.form = document.getElementById('form-field');
    this.todoInputBox = document.getElementById('input-field');
    this.labelID = '';
  }

  getActiveItem = (item) => {
    if (item.path[1].constructor.name === 'HTMLLabelElement') {
      return item.path[1].id;
    }
    return item.path[0].id;
  }

  fetchCurrentItems = (id) => {
    const currentCheckbox = document.getElementById(`checkbox-${id}`);
    const checkboxVal = currentCheckbox.checked;

    const currentDesc = document.getElementById(`text-id-${id}`);
    const currentDescVal = currentDesc.textContent;

    const summarizObj = {
      description: currentDescVal,
      completed: checkboxVal,
      index: id,
    };

    return summarizObj;
  }

  itemList = () => {
    const listCont = document.getElementById('list-cont');
    const permaNode = document.querySelectorAll('.prev-item');
    listCont.innerHTML = '';
    permaNode.forEach((item) => listCont.appendChild(item));

    let todoList = JSON.parse(localStorage.getItem('todo-list'));
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
      textTag.style.textDecoration = item.completed === true ? 'line-through' : 'none';
      label.appendChild(textTag);
      label.addEventListener('click', this.editDelete);
      element.appendChild(label);

      const optIcon = document.createElement('i');
      optIcon.id = `option-${item.index}`;
      optIcon.classList = 'fa fa-ellipsis-v option-menu';
      optIcon.innerHTML = ' ';
      optIcon.addEventListener('click', this.editDelete);

      element.appendChild(optIcon);
      listCont.appendChild(element);
      inputBox.addEventListener('click', (event) => {
        this.updateItem(event, 'checkbox');
      });
      this.todoInputBox.focus();
    });
  };

  updateItem = (event, type) => {
    let currentList = JSON.parse(localStorage.getItem('todo-list'));
    currentList = currentList === null ? [] : currentList;
    const currentInboxID = event.srcElement.id;
    const [, id] = currentInboxID.split('-');
    const currentElement = currentList.filter((val, index) => val.index === parseInt(id, 10));
    const currentElementIndex = currentList.indexOf(currentElement[0]);
    const newObj = {
      description: type === 'text' ? event.srcElement.value : currentElement[0].description,
      index: currentElement[0].index,
      completed: type !== 'text' ? event.srcElement.checked : currentElement[0].completed,
    };
    currentList[currentElementIndex] = newObj;
    localStorage.setItem('todo-list', JSON.stringify(currentList));
    this.itemList();
  }

  deleteItem = (event) => {
    let [, id] = event.srcElement.id.split('-');
    id = parseInt(id, 10);
    let taskItemList = JSON.parse(localStorage.getItem('todo-list'));
    taskItemList = taskItemList.filter((word, el) => el !== id);
    taskItemList.forEach((value, index) => {
      value.index = index;
    });
    localStorage.setItem('todo-list', JSON.stringify(taskItemList));
    this.itemList();
  }

  editDelete = (e) => {
    const eventId = this.getActiveItem(e);
    let id = '';
    [, id] = eventId.split('-');
    this.itemList();

    const liID = `li-${id}`;
    const currentLi = document.getElementById(liID);
    currentLi.className = 'todo-item active-li';
    const { description, index, completed } = this.fetchCurrentItems(id);
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

    currentLi.appendChild(checkbox);
    currentLi.appendChild(label);
    currentLi.appendChild(trashIcon);
    currentLi.style.display = 'flex';

    textInput.addEventListener('change', (event) => {
      this.updateItem(event, 'text');
    });

    checkbox.addEventListener('click', (event) => {
      this.updateItem(event, 'checkbox');
    });

    trashIcon.addEventListener('click', (event) => {
      this.deleteItem(event);
    });
  }

  addElement = (e) => {
    e.preventDefault();
    const val = this.form.elements.desc.value;
    let items = JSON.parse(localStorage.getItem('todo-list'));
    items = items === null ? [] : items;
    const indexNum = items.length + 1;
    const objItem = {
      description: val,
      completed: false,
      index: indexNum,
    };

    if (val !== null) {
      items.push(objItem);
      localStorage.setItem('todo-list', JSON.stringify(items));
      this.INPUT_ELEMENT.value = '';
      this.itemList();
    }
  };
}
