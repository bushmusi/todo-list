import './style.css';

const TODOLIST = [
  {
    description: 'I will call dave',
    completed: true,
    index: 0,
  },
  {
    description: 'I will write love letter',
    completed: false,
    index: 1,
  },
  {
    description: 'Got to Gym',
    completed: true,
    index: 2,
  },
];

const ITMELIST = (TODOLIST) => {
  const listCont = document.getElementById('list-cont');

  TODOLIST.forEach((item) => {
    const element = document.createElement('li');
    element.className = 'todo-item';
    const label = document.createElement('label');
    const inputBox = document.createElement('input');
    inputBox.type = 'checkbox';
    inputBox.id = item.index;
    label.appendChild(inputBox);
    label.innerHTML += `<h4>${item.description}</h4>`;
    element.appendChild(label);
    const optIcon = document.createElement('i');
    optIcon.classList = 'fa fa-ellipsis-v';
    element.appendChild(optIcon);
    listCont.appendChild(element);
  });
};

ITMELIST(TODOLIST);