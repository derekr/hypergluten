/**
 * Test suite
 *
 * @package glueton
 * @author Andrew Sliwinski <andrew@diy.org>
 */

/**
 * Dependencies
 */
var test    = require('tap').test,

    g       = require(__dirname + '/../index.js');

/**
 * Suite
 */
test('glueton simple', function (t) {
    var simple   = '<div data-bind="beep"></div>',
        expected = '<div data-bind="beep">boop</div>';

    t.equals(g(simple, { beep: 'boop' }).innerHTML, expected, 'Text should be "boop"');
    t.end();
});
