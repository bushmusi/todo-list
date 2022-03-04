import addVal from '../src/components/add-val.js';
import domElement from '../src/components/append-li.js';

describe('Testing add element functionality', () => {
  test('domElement should append li to ul', () => {
    document.body.innerHTML = `<div>' +
    '  <ul id="list-cont"></ul>' +
    '</div>`;
    const mockObj = {
      description: 'Test task',
      index: 99,
      completed: false,
    };
    domElement(mockObj);
    const list = document.querySelectorAll('#list-cont li');
    expect(list).toHaveLength(1);
  });

  test('addVal should add item to localstorage', () => {
    const task = 'I will call dad at evening';
    const res = addVal(task);
    expect(res.description).toEqual('I will call dad at evening');
  });
});