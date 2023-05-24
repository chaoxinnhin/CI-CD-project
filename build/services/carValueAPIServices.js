"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateCarValue = exports.nameValidation = exports.yearValidation = void 0;
const yearValidation = (data) => {
    const year = data.year || 0;
    const max = Math.max(2024);
    if (!year || year > max) {
        throw new Error("There is an error");
    }
    return year;
};
exports.yearValidation = yearValidation;
const nameValidation = (data) => {
    const carName = data.model || " ";
    if (!carName || carName.length > 10 || carName.length < 0) {
        throw new Error("There is an error");
    }
    return carName;
};
exports.nameValidation = nameValidation;
const calculateCarValue = (data) => {
    const carName = data.model || " ";
    const year = data.year || 0;
    const max = Math.max(2024);
    // Check if the carName and year are valid
    if (!carName ||
        !year ||
        year > max ||
        carName.length > 10 ||
        carName.length < 0) {
        throw new Error("There is an error");
    }
    const newCarName = carName.replace(/[^a-zA-Z]/g, "").toUpperCase();
    const carValue = [...newCarName].reduce((sum, char) => sum + char.charCodeAt(0) - "A".charCodeAt(0) + 1, 0) *
        100 +
        year;
    const result = { car_value: carValue };
    return result;
};
exports.calculateCarValue = calculateCarValue;
