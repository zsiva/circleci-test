const app = require('./index')
const supertest = require('supertest')
const request = supertest(app)

it('gets the / endpoint', function() {
  return new Promise(function (resolve) {
    request.get('/')
       .then((response) => {
          expect(response.status).toBe(200)
          expect(response.text).toBe('Hello World!')
          resolve();
       });
  });
})