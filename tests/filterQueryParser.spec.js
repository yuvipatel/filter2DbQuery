"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
require("mocha");
const filter2DbQuery = require("../index.js");

describe('Filter query parser ', () => {
    it(`should translate not equal filter operations into mongodb query`, () => {
        const filterQueryValue = `city ne 'London'`;
        const expectedJsonObject = {
            city: { $ne: 'London' }
        };
        const actualJsonObject = filter2DbQuery.parseFilterQuery(filterQueryValue);
        chai.expect(actualJsonObject).to.deep.equal(expectedJsonObject);
    });
    it(`should translate greater than filter operations into mongodb query`, () => {
        const filterQueryValue = `price gt 20`;
        const expectedJsonObject = {
            price: { $gt: '20' }
        };
        const actualJsonObject = filter2DbQuery.parseFilterQuery(filterQueryValue);
        chai.expect(actualJsonObject).to.deep.equal(expectedJsonObject);
    });
    it(`should translate greater than or equal filter operations into mongodb query`, () => {
        const filterQueryValue = `price ge 10`;
        const expectedJsonObject = {
            price: { $gte: '10' }
        };
        const actualJsonObject = filter2DbQuery.parseFilterQuery(filterQueryValue);
        chai.expect(actualJsonObject).to.deep.equal(expectedJsonObject);
    });
    it(`should translate less than filter operations into mongodb query`, () => {
        const filterQueryValue = `price lt 20`;
        const expectedJsonObject = {
            price: { $lt: '20' }
        };
        const actualJsonObject = filter2DbQuery.parseFilterQuery(filterQueryValue);
        chai.expect(actualJsonObject).to.deep.equal(expectedJsonObject);
    });
    it(`should translate less than or equal filter operations into mongodb query`, () => {
        const filterQueryValue = `price le 100`;
        const expectedJsonObject = {
            price: { $lte: '100' }
        };
        const actualJsonObject = filter2DbQuery.parseFilterQuery(filterQueryValue);
        chai.expect(actualJsonObject).to.deep.equal(expectedJsonObject);
    });
    it(`should translate logical and filter operations into mongodb query`, () => {
        const filterQueryValue = `price le 200 and price gt 3.5`;
        const expectedJsonObject = {
            $and: [
                {
                    price: { $lte: '200' }
                },
                {
                    price: { $gt: '3.5' }
                }
            ]
        };
        const actualJsonObject = filter2DbQuery.parseFilterQuery(filterQueryValue);
        chai.expect(actualJsonObject).to.deep.equal(expectedJsonObject);
    });
    it(`should translate logical or filter operations into mongodb query`, () => {
        const filterQueryValue = `price le 3.5 or price gt 200`;
        const expectedJsonObject = {
            $or: [
                {
                    price: { $lte: '3.5' }
                },
                {
                    price: { $gt: '200' }
                }
            ]
        };
        const actualJsonObject = filter2DbQuery.parseFilterQuery(filterQueryValue);
        chai.expect(actualJsonObject).to.deep.equal(expectedJsonObject);
    });
    it(`should translate logical negation filter operations into mongodb query`, () => {
        const filterQueryValue = `not price le 3.5`;
        const expectedJsonObject = {
            price: { $not: { $lte: '3.5' } }
        };
        const actualJsonObject = filter2DbQuery.parseFilterQuery(filterQueryValue);
        chai.expect(actualJsonObject).to.deep.equal(expectedJsonObject);
    });
    it('should return json object to be used to query resource from filter expression', () => {
        const filterQueryValue = `name eq 'Milk' and price lt 2.55`;
        const expectedJsonObject = {
            $and: [
                {
                    name: { $eq: 'Milk' }
                },
                {
                    price: { $lt: '2.55' }
                }
            ]
        };
        const actualJsonObject = filter2DbQuery.parseFilterQuery(filterQueryValue);
        chai.expect(actualJsonObject).to.deep.equal(expectedJsonObject);
    });
});