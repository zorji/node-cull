"use strict";

var _ = require('lodash');

/**
 * Culls an array to every n-th element.
 *
 * @see https://github.com/lodash/lodash/issues/706
 * @param list
 * @param freq
 * @param _rtl
 * @returns {*}
 */
function cull(list, freq, _rtl) {
    list = _.isArray(list) ? list.slice(0) : [];
    freq = freq || 1;

    if (_rtl) {
        list.reverse();
    }

    list = _.filter(list, function (val, i) {
        if (i % freq === 0) {
            return val;
        }
    });

    return _rtl ? list.reverse() : list;
}

module.exports = cull;
