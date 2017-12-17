const request = require('supertest');
const expect = require("expect");

var {app} = require('./server');

it('should return hello world response', (done) => {
  request(app)
    .get('/')
    .expect(404)
    .expect((res) => {
      expect(res.body).toInclude({
        error: "page not found"
      }); 
    })
    .end(done);
});

it('should check for users in /users', (done) => {
  request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
      expect(res.body).toInclude({
        name: 'UserA',
        age: 25
      });
    })
    .end(done);
});
