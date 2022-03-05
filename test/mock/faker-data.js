const todoItemStore = () => {
  const obj = [{
    description: 'Task 1',
    index: 1,
    completed: true,
  }];
  localStorage.setItem('todo-list', JSON.stringify(obj));
};

export default todoItemStore;