"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../../app"));
const request = require("supertest");
describe("CarInfo API", () => {
    test("It should return the car value for the model and year", () => __awaiter(void 0, void 0, void 0, function* () {
        // Arrange
        const expected = {
            car_value: 5408,
        };
        // Act
        const res = yield request(app_1.default).get("/api/car_value");
        // Assert
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(expected);
    }));
});
