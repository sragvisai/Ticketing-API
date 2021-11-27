var server = require("../routes/mockfunctioncalls.js");
var expect = require("chai").expect;
var jest = require("jest-mock");

describe("Routing", function () {
    
var request = {};
var response = {
     data: {
         "id" : 1,
         "subject" :"Hello there",
         "status" : "open"
     }
    , send: function (view, viewData) {
        this.viewName = view;
        this.data = viewData;
    }
};

    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({}),
        })
    );
    beforeEach(() => {
        fetch.mockClear();
      });

    describe("Server Route", function () {
        it("Successful retrieval of data", function () {
            server(request, response);
            expect(response.data.id).equal(1);
            expect(response.data.subject).equal('Hello there');
            expect(response.data.status).equal('open');
        });

    });
});