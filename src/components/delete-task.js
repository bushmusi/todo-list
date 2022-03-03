const deleteItem = (event) => {
  let [, id] = event.srcElement.id.split('-');
  id = +id;
  let taskItemList = JSON.parse(localStorage.getItem('todo-list'));
  taskItemList = taskItemList.filter((word, el) => el + 1 !== id);
  taskItemList.forEach((value, index) => {
    value.index = index + 1;
  });
  localStorage.setItem('todo-list', JSON.stringify(taskItemList));
};

export default deleteItem;