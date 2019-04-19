require('dotenv').config()
const expect = require('chai').expect;
const request = require('request');
const db = require('../src/model/db.connection');

// get server url from .env
const SERVER = process.env.SERVER || 'http://localhost';
const PORT = process.env.PORT || 3000;
const SERVER_URL = `${SERVER}:${PORT}`;


describe('Server should response', function () {
    it('should send get request and recieve success message', function (done) {
        request.get(SERVER_URL, function (error, res) {
            const body = JSON.parse(res.body);
            expect(error).to.be.null;
            expect(res.statusCode).to.equal(200);
            expect(body.status).to.equal('success');
            done();
        });
    });

    it('should connect to Database', function (done) {
        db.authenticate()
            .then(() => {
                done();
            })
            .catch(err => {
                done(err);
            });
    });
});