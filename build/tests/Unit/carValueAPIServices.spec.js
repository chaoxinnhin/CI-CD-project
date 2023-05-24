"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const carValueAPIServices_1 = require("../../services/carValueAPIServices");
const carValueAPI = require("../../services/carValueAPIServices");
test("Adds the Ferrari value and 2014 value to equal to 9514", () => {
    // Arrange
    const input = {
        model: "Ferrari",
        year: 2014,
        car_value: 0,
    };
    const expected = { car_value: 9514 };
    // Act
    const actual = (0, carValueAPIServices_1.calculateCarValue)(input);
    // Assert
    expect(actual).toEqual(expected);
});
test("Adds the Grace value and 2008 value to equal to 5408", () => {
    // Arrange
    const input = {
        model: "Grace",
        year: 2008,
        car_value: 0,
    };
    const expected = { car_value: 5408 };
    // Act
    const actual = (0, carValueAPIServices_1.calculateCarValue)(input);
    // Assert
    expect(actual).toEqual(expected);
});
test("Throws error message for negative year", () => {
    // Arrange
    const input = {
        model: "S60",
        year: -2005,
        car_value: 0,
    };
    // Assert
    expect(() => (0, carValueAPIServices_1.calculateCarValue)(input)), "to throw";
});
test("Adds Bt-50D value and 2010 value to equal to 1410", () => {
    // Arrange
    const input = {
        model: "Bt-50D",
        year: 2010,
        car_value: 0,
    };
    const expected = { car_value: 4610 };
    // Act
    const actual = (0, carValueAPIServices_1.calculateCarValue)(input);
    // Assert
    expect(actual).toEqual(expected);
});
test("Adds 305 value and 2015 value to equal to 2015", () => {
    // Arrange
    const input = {
        model: "305",
        year: 2015,
        car_value: 0,
    };
    const expected = { car_value: 2015 };
    // Act
    const actual = (0, carValueAPIServices_1.calculateCarValue)(input);
    // Assert
    expect(actual).toEqual(expected);
});
test("Throws an error message on random characters", () => {
    // Arrange
    const input = {
        model: "^&#",
        year: 2016,
        car_value: 0,
    };
    // Assert
    expect(() => (0, carValueAPIServices_1.calculateCarValue)(input)), "to throw";
});
test("Adds Camry value and 1983 value to equal to 7983", () => {
    // Arrange
    const input = {
        model: "Camry",
        year: 1983,
        car_value: 0,
    };
    const expected = { car_value: 7983 };
    // Act
    const actual = (0, carValueAPIServices_1.calculateCarValue)(input);
    // Assert
    expect(actual).toEqual(expected);
});
test("Throws an error message on decimal year", () => {
    // Arrange
    const input = {
        model: "Hilux",
        year: 2020.2,
        car_value: 0,
    };
    // Assert
    expect(() => (0, carValueAPIServices_1.calculateCarValue)(input)), "to throw";
});
test("Throws an error message on too long of a name", () => {
    // Arrange
    const input = {
        model: "Mondeo Ambiente WGN",
        year: 2015,
        car_value: 0,
    };
    // Assert
    expect(() => (0, carValueAPIServices_1.calculateCarValue)(input)), "to throw";
});
test("Throws an error message on too long of a year", () => {
    // Arrange
    const input = {
        model: "Dragon",
        year: 2001234,
        car_value: 0,
    };
    // Assert
    expect(() => (0, carValueAPIServices_1.calculateCarValue)(input)), "to throw";
});
