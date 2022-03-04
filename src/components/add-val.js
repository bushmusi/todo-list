const addVal = (val) => {
  let items = [];
  try {
    items = JSON.parse(localStorage.getItem('todo-list'));
  } catch (e) {
    throw new Error(`Error occured: ${e}`);
  }
  items = items === null ? [] : items;
  const indexNum = items.length + 1;
  const objItem = {
    description: val,
    completed: false,
    index: indexNum,
  };

  if (val !== '' && val !== ' ') {
    items.push(objItem);
    localStorage.setItem('todo-list', JSON.stringify(items));
  }
  return objItem;
};

export default addVal;