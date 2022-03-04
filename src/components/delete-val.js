const deleteLi = (id) => {
  let taskItemList = [];
  try {
    taskItemList = JSON.parse(localStorage.getItem('todo-list'));
  } catch (e) {
    throw new Error(`Error occured: ${e}`);
  }
  taskItemList = taskItemList.filter((word, el) => el + 1 !== id);
  taskItemList.forEach((value, index) => {
    value.index = index + 1;
  });
  localStorage.setItem('todo-list', JSON.stringify(taskItemList));
  return true;
};

export default deleteLi;