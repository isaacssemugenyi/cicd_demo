const request = require('supertest');
const app = require('../server');

describe('GET /', function() {
    it('respond with hello world', function(done) { 
        request(app).get('/').expect('Hello, World', done);
    });

    it('respond with Accessing data api', function(done) { 
        request(app).get('/data').expect('Accessing data api', done);
    });
});