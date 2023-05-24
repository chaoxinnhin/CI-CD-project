// import { Server } from 'http'
import app from "../../server";
import request from "supertest";

describe("Claims API", () => {
  test("it should return all tasks", async () => {
    // Arrange
    const expected = [
      {
        id: 1,
        claim: "there has been no accidents in the past 3 years",
        riskRating: 1,
      },
    ];

    // Act
    const res = await request(app).get("/riskrating");

    // Assert
    expect(res.status).toEqual(200);
    expect(res.body).toEqual(expected);
  });
});
