exports.escapeJSON = function(str) {
  return str
    .trim()
    .replace(/^\{[^"]+\"/g, '{"')
    .replace(/[\s]+\}$/g, '}')
    .replace(/,[\s]*"/g, ',"')
    .replace(/[\n]/g, '\\n');
};
