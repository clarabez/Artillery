const axios = require("axios");
const expect = require("chai").expect;

module.exports.safeGet = async function (url, data, options) {
    try {
        let response = await axios.get(url, data, options);
        const HTTP_OK = 200;
        expect(response.status).to.eql(HTTP_OK, `Expected 200 but got ${response.status}: ${response.data}`);
        return response;
    } catch (err) {
        if (err.response && err.response.data) {
            console.error(`Error on url ${url}: ${err.response.status} - ${JSON.stringify(err.response.data)}`);
        }
        throw err;
    }
};

module.exports.safePost = async function (url, options) {
    try {
        let response = await axios.post(url, options.body , options);
        const HTTP_OK_INITIAL_RANGE = 200;
        const HTTP_OK_FINA_RANGE = 299;

        expect(response.status).to.be.at.least(HTTP_OK_INITIAL_RANGE, `Expected 200 but got ${response.status}: ${response.data}`);
        expect(response.status).to.be.at.most(HTTP_OK_FINA_RANGE, `Expected 200 but got ${response.status}: ${response.data}`);
        return response;
    } catch (err) {
        if (err.response && err.response.data) {
            console.error(`Error on url ${url} with body ${JSON.stringify(options.body)}: ${err.response.status} - ${JSON.stringify(err.response.data)}`);
        }
        throw err;
    }
};

module.exports.safePut = async function (url, data, options) {
    try {       
        let response = await axios.put(url, data, options);
        const HTTP_OK_INITIAL_RANGE = 200;
        const HTTP_OK_FINA_RANGE = 299;

        expect(response.status).to.be.at.least(HTTP_OK_INITIAL_RANGE, `Expected 200 but got ${response.status}: ${response.data}`);
        expect(response.status).to.be.at.most(HTTP_OK_FINA_RANGE, `Expected 200 but got ${response.status}: ${response.data}`);
        return response;
    } catch (err) {
        if (err.response && err.response.data) {
            console.error(`Error on url ${url}: ${err.response.status} - ${JSON.stringify(err.response.data)}`);
        }
        throw err;
    }
};
