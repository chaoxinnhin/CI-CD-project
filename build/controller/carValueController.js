"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.longYearValidation = exports.calculateCamryValue = exports.validateLongNames = exports.calculateNumberOnlyValue = exports.calculateNumberAndTextValue = exports.carValidationGrace = exports.calculateCarValue = void 0;
const carValueAPI = __importStar(require("../services/carValueAPIServices"));
const calculateCarValue = (request, response) => {
    const { model, year, car_value } = request.body;
    const inputs = { model, year, car_value };
    const value = carValueAPI.calculateCarValue(inputs);
    response.send(value);
};
exports.calculateCarValue = calculateCarValue;
const carValidationGrace = (request, response) => {
    const { model, year, car_value } = request.body;
    const inputs = { model: "Grace", year: 2008, car_value: 0 };
    const value = carValueAPI.calculateCarValue(inputs);
    response.send(value);
};
exports.carValidationGrace = carValidationGrace;
const calculateNumberAndTextValue = (request, response) => {
    const { model, year, car_value } = request.body;
    const inputs = { model: "Bt-50D", year: 2010, car_value: 0 };
    const value = carValueAPI.calculateCarValue(inputs);
    response.send(value);
};
exports.calculateNumberAndTextValue = calculateNumberAndTextValue;
const calculateNumberOnlyValue = (request, response) => {
    const { model, year, car_value } = request.body;
    const inputs = { model: "380", year: 2015, car_value: 0 };
    const value = carValueAPI.calculateCarValue(inputs);
    response.send(value);
};
exports.calculateNumberOnlyValue = calculateNumberOnlyValue;
const validateLongNames = (request, response) => {
    const inputs = {
        model: "Mondeo Ambiente WGN",
        year: 2015,
        car_value: 0,
    };
    try {
        const value = carValueAPI.nameValidation(inputs);
    }
    catch (error) {
        response.status(404).send(error);
    }
};
exports.validateLongNames = validateLongNames;
const calculateCamryValue = (request, response) => {
    const { model, year, car_value } = request.body;
    const inputs = { model: "Camry", year: 1983, car_value: 0 };
    const value = carValueAPI.calculateCarValue(inputs);
    response.send(value);
};
exports.calculateCamryValue = calculateCamryValue;
const longYearValidation = (request, response) => {
    const { model, year, car_value } = request.body;
    const inputs = { model: "Dragon", year: 20234234, car_value: 0 };
    try {
        const value = carValueAPI.yearValidation(inputs);
    }
    catch (error) {
        response.status(404).send(error);
    }
};
exports.longYearValidation = longYearValidation;
