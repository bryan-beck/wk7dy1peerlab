const getGreeting = require('./project');

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});
const addName = require('./project');
test('can add a new name',() => {
  expect(addName('kyson')).toBe("Buenos dias kyson");
});
