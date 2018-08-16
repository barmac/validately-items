const mongoose = require('mongoose');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const expect = chai.expect;

const app = require('../app');

const BASE_TESTED_ENDPOINT = '/items';
const WAIT_FOR_APP_MS = 2000;

const sleep = () => new Promise(resolve => setTimeout(resolve, WAIT_FOR_APP_MS));

const waitForDatabaseConnection = (mongoose) => new Promise((resolve, reject) => {
  if (mongoose.connection.db) {
    return resolve(true);
  }
  return resolve(sleep());
});

describe('Item API test', () => {
  beforeEach(function () {
    this.timeout(5000);
    
    return waitForDatabaseConnection(mongoose)
      .then(() => mongoose.connection.db.dropDatabase());
  });

  describe('Get items', () => {
    it('should return items from db', done => {
      chai
        .request(app)
        .get(BASE_TESTED_ENDPOINT)
        .send()
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');

          done();
        });
    });
  });
  
  describe('Add item', () => {
    it('should add item to db', done => {
      chai
        .request(app)
        .post(BASE_TESTED_ENDPOINT)
        .send({ name: 'testname' })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');

          done();
        });
    });

    it('should return BAD REQUEST if name was not sent', done => {
      chai
        .request(app)
        .post(BASE_TESTED_ENDPOINT)
        .send()
        .end((err, res) => {
          expect(res).to.have.status(400);

          done();
        });
    });
  });
});