const axios = require("axios");
const expect = require("chai").expect;

describe("Tests to the \"/\" endpoint", () => {
    it("should return a 200 status code", async () => {
        const res = await axios("http://localhost:80/");
        expect(res.status).to.equal(200);
    });
    it("should return a JSON object with a Message", async () => {
        const res = await axios("http://localhost:80/");
        expect(res.data).to.haveOwnProperty("message");
    });
    it("should return a JSON object with a Timestamp", async () => {
        const res = await axios("http://localhost:80/");
        expect(res.data).to.haveOwnProperty("timestamp");
    });
    it("should return a Message saying \"My name is ...\"", async () => {
        const res = await axios("http://localhost:80/");
        expect(res.data.message).to.contain("My name is");
    });
    it("should return a UNIX style timestamp (numerical values only)", async () => {
        const res = await axios("http://localhost:80/");
        expect(res.data.timestamp).to.be.a("number");
    });
    it("should return a timestamp within a few seconds of now", async () => {
        const res = await axios("http://localhost:80/");
        const now = Date.now();
        expect(res.data.timestamp).to.be.within(now - 5000, now);
    });
    it("should return a minified JSON object.", async () => {
        const res = await axios("http://localhost:80/");
        expect(JSON.stringify(res.data).length).to.be.lessThan(100);
    });
});