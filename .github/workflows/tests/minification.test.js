
const axios = require('axios');        // Imports the Axios library for HTTP requests
const expect = require('chai').expect; // Imports the 'expect' assertion style from Chai


// SECTION: TEST SUITE DEFINITION
// This section defines a Mocha test suite named 'Tests for Minification' to group related tests.
// It uses the 'describe' function to organize the test logic for checking JSON minification.

describe('Tests for Minification', () => {

// SUBSECTION: INDIVIDUAL TEST CASE
// This subsection defines a single test case (using 'it') to verify that a JSON response from
// a local server is minified, meaning its stringified length is less than 100 characters.

  it('should return a minified JSON object with length less than 100 characters', async () => {
    const res = await axios.get('http://localhost:80/');           // Makes an HTTP GET request to the server
    const jsonLength = JSON.stringify(res.data).length;          // Calculates the length of the JSON response
    expect(jsonLength).to.be.below(100, `JSON length (${jsonLength}) exceeds 100 characters`);

  });

});