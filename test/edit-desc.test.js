import { makeEditable } from '../src/components/pure-mtd.js';
import domContainer from './mock/list-cont.js';

describe('Check making editable sigle item list', () => {
  test('Test if makeEditable return an array of dom', () => {
    const id = 1;
    domContainer();
    const res = makeEditable(id);
    expect(res.length).toBe(3);
  });
});