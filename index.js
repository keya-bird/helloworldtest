const hello = require('./index');

// Test will fail because it expects "Hello There" instead of "Hello, world!"
test('should say hello world', () => {
  expect(hello()).toBe('Hello There');
});
