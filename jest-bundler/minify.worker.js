const { minify, minify_sync } = require('terser');

exports.minifySync = function (code) {
    const transformResult = { code: '' };
    try {
        transformResult.code = minify_sync(code).code;
    } catch (error) {
        transformResult.errorMessage = error.message;
    }
    return transformResult;
};
