const util = require('../src/util');

test('escapeJSON', () => {
  const input = `{
    "foo": "bar",
    "multiline": "
      Testing a multiline JSON string
    ",
    "baz": 1234
  }`.trim();
  const minified = util.minifyJSON(input);
  expect(JSON.parse(minified)).toBeTruthy();
});
