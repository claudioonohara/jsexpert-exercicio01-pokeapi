const { describe, it } = require('mocha')
const request = require('supertest')
const app = require('./../../src/api')

describe('API Suite Test', () => {
    describe('/hello', () => {
        it('should request an inexistent route /hi and be redirect to /', async () => {
            const response = await request(app)
                .get('/hi')
                .expect(302)
        })
    })

    describe('/team', () => {
        it('should request team path and return HTTP status 200', async () => {
            const response = await request(app)
                .get('/team')
                .expect(200)
        })
    })

    describe('/', () => {
        it('should request root path and return HTTP status 200', async () => {
            const response = await request(app)
                .get('/')
                .expect(200)
        })
    })
})