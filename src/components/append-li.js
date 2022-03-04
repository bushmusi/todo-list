const domElement = (item) => {
  const ulElement = document.getElementById('list-cont');
  const element = document.createElement('li');
  element.className = 'todo-item';
  element.id = `li-${item.index}`;

  const label = document.createElement('label');
  label.id = `label-${item.index}`;
  label.className = 'label-item';

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.className = 'checkbox-item';
  checkBox.id = `checkbox-${item.index}`;
  checkBox.checked = item.completed;

  element.appendChild(checkBox);

  const textTag = document.createElement('h4');
  textTag.id = `text-id-${item.index}`;
  textTag.textContent = `${item.description}`;
  textTag.style.textDecoration = item.completed ? 'line-through' : 'none';
  label.appendChild(textTag);
  element.appendChild(label);

  const optIcon = document.createElement('i');
  optIcon.id = `option-${item.index}`;
  optIcon.classList = 'fa fa-ellipsis-v option-menu';
  optIcon.innerHTML = ' ';

  element.appendChild(optIcon);
  ulElement.appendChild(element);

  return [label, optIcon, checkBox];
};

export default domElement;