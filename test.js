const getGreeting = require('./project');

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});
const getGreeeting = require('./project');
test('can create a basic greeting',() => {
  expect(getGreeting('hola')).toBe("Buenos días");
});
