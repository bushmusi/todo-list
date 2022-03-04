import deleteLi from '../src/components/delete-val.js';

describe('This test is for deleting an item', () => {
  test('testing an item should minimise the amount', () => {
    document.body.innerHTML = `<div>
      <ul id="list-ul">
        <li id='li-1'>Call to GF</li>
      </ul>
    </div>`;
    const id = 1;
    const liItem = document.getElementById(`li-${id}`);
    liItem.remove();
    const list = document.querySelectorAll('#list-ul li');
    expect(list).toHaveLength(0);
  });
});