const request = require('supertest');
const app = require('../lib/app-exercise');

describe('application routes', () => {
  it('returns a welcome page', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('Welcome'));
      });
  });
});

