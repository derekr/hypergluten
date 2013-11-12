var hyperglue = require('hyperglue');

module.exports = function (html, data, scope) {
    var keys = Object.keys(data),
        _data = {},
        _key = typeof scope !== 'undefined' ? scope + ' ' : '',
        selector,
        k;

    for (k in keys) {
        selector = _key + '[data-bind=' + keys[k] + ']';
        _data[selector] = data[keys[k]];
    }

    return hyperglue(html, _data);
};
