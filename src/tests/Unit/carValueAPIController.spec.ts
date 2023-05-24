import {
  calculateNumberAndTextValue,
  calculateNumberOnlyValue,
  validateLongNames,
  carValidationGrace,
  calculateCamryValue,
  longYearValidation,
} from "../../controller/carValueController";
import { CarData } from "../../types/CarData";
import { createRequest, createResponse } from "node-mocks-http";

// Unit test 1
describe("Calculate car value", () => {
  test("Any car value should be a sunny day at the beach ", () => {
    // Arrange
    const request = createRequest();
    const response = createResponse();

    const expected = {
      model: "Grace",
      year: 2008,
      car_value: 5408,
    };

    // Act
    carValidationGrace(request, response);

    // Assert
    expect(response.json()._getData()).toEqual(expected);
  });
});

// Unit test 2
describe("Number and text together", () => {
  test("Number and text should be ok together. Opposite attracts ", () => {
    // Arrange
    const request = createRequest();
    const response = createResponse();

    const expected = {
      4610,
    };

    // Act
    calculateNumberAndTextValue(request, response);

    // Assert
    expect(response.json()._getData()).toEqual(expected);
  });
});

// Unit test 3
describe("Numbers only", () => {
  test("Number should be ok by themselves, just like introverts ", () => {
    // Arrange
    const request = createRequest();
    const response = createResponse();

    const expected = {
      2015,
    };

    // Act
    calculateNumberOnlyValue(request, response);

    // Assert
    expect(response.json()._getData()).toEqual(expected);
  });
});

// Unit test 4
describe("Too Long of a name", () => {
  test(" Should throw an error for too long of a name ", () => {
    // Arrange
    const request = createRequest();
    const response = createResponse();

    const expected = {
      2015,
    };

    // Act
    validateLongNames(request, response);

    // Assert
    expect(response.statusCode).toBe(404);
    expect(response.json()._getData()), "to throw";
  });
});

// Unit test 5
describe("Is old is gold?", () => {
  test(" Should be ok no matter how old the vehicle is", () => {
    // Arrange
    const request = createRequest();
    const response = createResponse();

    const expected = {
      7983,
    };

    // Act
    calculateCamryValue(request, response);

    // Assert
    expect(response.json()._getData()).toEqual(expected);
  });
});

// Unit test 6
describe("The number is way too long", () => {
  test("It should respond with an error because the digit is too high", () => {
    // Arrange
    const request = createRequest();
    const response = createResponse();

    const expected = {
      7983,
    };

    // Act
    longYearValidation(request, response);

    // Assert
    expect(response.statusCode).toBe(404);
    expect(response.json()._getData()), "to throw";
  });
});
