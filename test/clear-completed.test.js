import { multipleDelete } from '../src/components/pure-mtd.js';
import domContainer from './mock/list-cont.js';
import todoItemStore from './mock/faker-data.js';

describe('Clear all completed', () => {
  test('check if we get one check item', () => {
    domContainer();
    todoItemStore();
    const res = multipleDelete();
    expect(res.length).toBe(1);
  });
});