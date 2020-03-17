const util = require('../util');

test('escapeJSON', () => {
  const input = `{
    "foo": "bar",
    "multiline": "
      Testing a multiline JSON string
    ",
    "baz": 1234
  }`.trim();
  const escaped = util.escapeJSON(input);
  expect(JSON.parse(escaped)).toBeTruthy();
});
