import Todo from '../src/add-remove.js';

jest.mock('__mocks__/');

describe('Testing Edit,update and clear all completed', () => {
  test('Edit should return an object', () => {
    const todoObj = new Todo();
    expect(todoObj.editDelete()).toBeTruthy();
  });
});