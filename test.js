const getGreeting = require('./project');

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});
const createGreeeting = require('./project');
test('can create a basic greeting',() => {
  expect(createGreeting('kyson')).toBe("Buenos dias kyson");
});
