var hyperglue = require('hyperglue');

module.exports = function (html, data, scope) {
    var keys = Object.keys(data),
        _data = {},
        _key = typeof scope !== 'undefined' ? scope + ' ' : '',
        k;

    for (k in keys) {
        _key += '[data-bind=' + keys[k] + ']';
        _data[_key] = data[keys[k]];
    }

    return hyperglue(html, _data);
};
