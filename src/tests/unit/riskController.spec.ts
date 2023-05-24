import { createRequest, createResponse } from "node-mocks-http";
import { getAllClaims, getOneClaim } from "../controller/riskratingController";

describe("getAllClaims", () => {
  test("should send all tasks via res", () => {
    // Arrange
    const req = createRequest();
    const res = createResponse();
    const expected = [
      {
        id: 1,
        claim: "there has been no accidents in the past 3 years",
        riskRating: 1,
      },
    ];

    // Act
    getAllClaims(req, res);

    // Assert
    expect(res.json()._getData()).toEqual(expected);
  });
});

describe("getOneTask", () => {
  test("should return a task by claim", () => {
    //Arrange
    const req = createRequest();
    const res = createResponse();
    const expected = {
      id: 1,
      claim: "there has been no accidents in the past 3 years",
      riskRating: 1,
    };

    req.params = { id: "1" };

    //Act
    getOneClaim(req, res);

    //Assert
    expect(res.json()._getData()).toEqual(expected);
  });
});
