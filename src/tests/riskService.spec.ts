import {
  getAllClaims,
  getOneClaim,
  createOneClaim,
} from "../services/riskService";

describe("getAllClaims", () => {
  test("should return a default Task", () => {
    // Arrange
    const expected = [
      {
        id: 1,
        claim: "there has been no accidents in the past 3 years",
        riskRating: 1,
      },
    ];

    // Act
    const actual = getAllClaims();

    //Assert
    expect(actual).toEqual(expected);
  });
});

describe("createClaim", () => {
  test("should create a claim", () => {
    const claimKeywords = /(collision|crash|accident|scratch)/gi;
    //Arrange
    const input = {
      claim:
        "I had a collision with another car last year, but no other incidents",
      riskRating: 2,
    };
    const matches = input.claim.match(claimKeywords);
    const rating = matches ? matches.length : 0;
    const expected = {
      id: 2,
      claim:
        "I had a collision with another car last year, but no other incidents",
      riskRating: rating + 1,
    };

    //Act
    const actual = createOneClaim(input.claim);

    //Assert
    expect(actual).toEqual(expected);
  });
});

describe("getOneTask", () => {
  test("should return a task by Id", () => {
    //Arrange
    const input = 2;
    const expected = {
      id: 2,
      claim:
        "I had a collision with another car last year, but no other incidents",
      riskRating: 2,
    };

    //Act
    const actual = getOneClaim(input);

    //Assert
    expect(actual).toEqual(expected);
  });
});
