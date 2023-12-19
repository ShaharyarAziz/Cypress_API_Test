/// <reference types="cypress"/>

const cypress = require("cypress");
const { method } = require("cypress/types/bluebird");

describe('API TEST FOR CONDUIT WEBSITE', () => {    
    it('GET API REQUEST', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:4200/api/tags'
        }).then((response) => {
            JSON.stringify(response)
            expect(response.status).to.equal(200)
        })
    });
});