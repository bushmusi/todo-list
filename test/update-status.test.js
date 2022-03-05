import { updateCheckboxDom } from '../src/components/pure-mtd.js';
import domContainer from './mock/list-cont.js';

describe('This test is to check completed status', () => {
  test('Test if checked item desc are line-through', () => {
    const id = 1;
    domContainer();
    const textTag = updateCheckboxDom(id);
    expect(textTag).toBe('line-through');
  });
});