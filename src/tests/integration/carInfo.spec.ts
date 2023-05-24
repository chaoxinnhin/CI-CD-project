import app from "../../app";

const request = require("supertest");

describe("CarInfo API", () => {
  test("It should return the car value for the model and year", async () => {
    // Arrange
    const expected = {
      car_value: 5408,
    };

    // Act
    const res = await request(app).get("/api/car_value");

    // Assert
    expect(res.status).toEqual(200);
    expect(res.body).toEqual(expected);
  });
});
