var request = require('supertest');
var app = require('../index.js');
describe('GET /', function() {
 it('respond with PIPELINE SUCESS', function(done) {
 request(app).get('/').expect('.... PIPELINE SUCCESS ....', done);
 });
});
