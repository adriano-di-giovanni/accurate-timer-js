var through = require('through2');
var PluginError = require('gulp-util').PluginError;

module.exports = function stringify(prepend, append) {
    prepend = prepend || '';
    append = append || '';

    function transform(chunk, encoding, callback) {
        if (chunk.isNull()) {
            callback(null, chunk);
            return;
        }

        if (chunk.isStream()) {
            this.emit('error', new PluginError('gulp-stringify',  'Streaming not supported'));
            return;
        }

        chunk.contents = new Buffer(prepend+JSON.stringify(chunk.contents.toString())+append);

        callback(null, chunk);
    }

    return through.obj(transform);
};
