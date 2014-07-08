'use strict';

var child = require('child_process');
var path = require('path');
var format = require('util').format;

module.exports = validate;

/**
 *  Validate cfg
 *  @param {String} filePath
 *  @param {Function} cb
 *  @api public
 */

function validate (filePath, cb) {
  child.exec('which haproxy', function(err, stdout, stderr){
    if (err) return cb('HAproxy must be installed', null);
    _validate(filePath, cb);
  });
};

/**
 *  Do the actual work
 *  @param {String} filePath
 *  @param {Function} cb
 *  @api private
 */

function _validate (filePath, cb) {
  var filePath = path.resolve(__dirname, filePath);
  var str = format('haproxy -f %s -c', filePath);

  child.exec(str, function(err, stdout, stderr){
    if (err) return cb(err, stderr);
    cb(err, stdout);
  });
};
