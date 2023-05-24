"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const carValueController_1 = require("../../controller/carValueController");
const node_mocks_http_1 = require("node-mocks-http");
// Unit test 1
describe("Calculate car value", () => {
    test("Any car value should be a sunny day at the beach ", () => {
        // Arrange
        const request = (0, node_mocks_http_1.createRequest)();
        const response = (0, node_mocks_http_1.createResponse)();
        const expected = {
            car_value: 5408,
        };
        // Act
        (0, carValueController_1.carValidationGrace)(request, response);
        // Assert
        expect(response.json()._getData()).toEqual(expected);
    });
});
// Unit test 2
describe("Number and text together", () => {
    test("Number and text should be ok together. Opposite attracts ", () => {
        // Arrange
        const request = (0, node_mocks_http_1.createRequest)();
        const response = (0, node_mocks_http_1.createResponse)();
        const expected = {
            car_value: 4610,
        };
        // Act
        (0, carValueController_1.calculateNumberAndTextValue)(request, response);
        // Assert
        expect(response.json()._getData()).toEqual(expected);
    });
});
// Unit test 3
describe("Numbers only", () => {
    test("Number should be ok by themselves, just like introverts ", () => {
        // Arrange
        const request = (0, node_mocks_http_1.createRequest)();
        const response = (0, node_mocks_http_1.createResponse)();
        const expected = {
            car_value: 2015,
        };
        // Act
        (0, carValueController_1.calculateNumberOnlyValue)(request, response);
        // Assert
        expect(response.json()._getData()).toEqual(expected);
    });
});
// Unit test 4
describe("Too Long of a name", () => {
    test(" Should throw an error for too long of a name ", () => {
        // Arrange
        const request = (0, node_mocks_http_1.createRequest)();
        const response = (0, node_mocks_http_1.createResponse)();
        const expected = {
            car_value: 2015,
        };
        // Act
        (0, carValueController_1.validateLongNames)(request, response);
        // Assert
        expect(response.statusCode).toBe(404);
        expect(response.json()._getData()), "to throw";
    });
});
// Unit test 5
describe("Is old is gold?", () => {
    test(" Should be ok no matter how old the vehicle is", () => {
        // Arrange
        const request = (0, node_mocks_http_1.createRequest)();
        const response = (0, node_mocks_http_1.createResponse)();
        const expected = {
            car_value: 7983,
        };
        // Act
        (0, carValueController_1.calculateCamryValue)(request, response);
        // Assert
        expect(response.json()._getData()).toEqual(expected);
    });
});
// Unit test 6
describe("The number is way too long", () => {
    test("It should respond with an error because the digit is too high", () => {
        // Arrange
        const request = (0, node_mocks_http_1.createRequest)();
        const response = (0, node_mocks_http_1.createResponse)();
        const expected = {
            car_value: 7983,
        };
        // Act
        (0, carValueController_1.longYearValidation)(request, response);
        // Assert
        expect(response.statusCode).toBe(404);
        expect(response.json()._getData()), "to throw";
    });
});
