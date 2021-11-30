const app = require('./index')
const supertest = require('supertest')
const request = supertest(app)


it('gets the / endpoint', async () => {
  const response = await request.get('/')

  expect(response.status).toBe(200)
  expect(response.text).toBe('Hello World!')
})