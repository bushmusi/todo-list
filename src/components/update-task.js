// import itemList from './list-task.js';

const updateItem = ({ event, type }) => {
  let currentList = [];
  try {
    currentList = JSON.parse(localStorage.getItem('todo-list'));
  } catch (e) {
    throw new Error(`Error ocurred: ${e}`);
  }
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
  // itemList();
};

export default updateItem;