export const editFun = jest.fn();
const mock = jest.fn().mockImplementation(() => ({ status: editFun }));

export default mock;