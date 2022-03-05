import deleteLi from '../src/components/delete-val.js';
import domElement from '../src/components/add-val.js';

describe('This test is for deleting an item', () => {
  test('testing an item should minimise the amount', () => {
    document.body.innerHTML = `<div>
      <ul id="list-cont">
        <li id='li-1'>Call to GF</li>
      </ul>
    </div>`;
    const id = 1;
    const obj = [{
      description: 'Call to GF',
      completed: false,
      index: 1,
    }];
    localStorage.setItem('todo-list', JSON.stringify(obj));
    deleteLi(id);
    const liItem = document.getElementById(`li-${id}`);
    liItem.remove();
    const list = document.querySelectorAll('#list-cont #li-1');
    expect(list).toHaveLength(0);
  });
});