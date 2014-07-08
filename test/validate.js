'use strict';

var assert = require('chai').assert;
var havalidate = require('..');

describe('havalidate()', function(){
  it('validates an haproxy config file', function(d){
    havalidate(__dirname+'/fixtures/config.cfg', function(err, msg){
      assert.isNull(err);
      assert.isString(msg);
      assert.equal(msg, 'Configuration file is valid\n');
      d();
    });
  });
});

describe('havalidate()', function(){
  it('validates an haproxy config file', function(d){
    havalidate(__dirname+'/fixtures/config_bad.cfg', function(err){
      assert.ok(err);
      d();
    });
  });
});

describe('havalidate()', function(){
  it('validates an haproxy config file', function(d){
    havalidate(__dirname+'/fixtures/enoent.cfg', function(err){
      assert.ok(err);
      d();
    });
  });
});
