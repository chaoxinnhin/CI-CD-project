import { json } from "stream/consumers";
import { CarData } from "../types/CarData";

export const yearValidation = (data: CarData) => {
  const year: number = data.year || 0;
  const max = Math.max(2024);

  if (!year || year > max) {
    throw new Error("There is an error");
  }
  return year;
};

export const nameValidation = (data: CarData) => {
  const carName: string = data.model || " ";

  if (!carName || carName.length > 10 || carName.length < 0) {
    throw new Error("There is an error");
  }
  return carName;
};

export const calculateCarValue = (data: CarData) => {
  const carName: string = data.model || " ";
  const year: number = data.year || 0;
  const max = Math.max(2024);

  // Check if the carName and year are valid
  if (
    !carName ||
    !year ||
    year > max ||
    carName.length > 10 ||
    carName.length < 0
  ) {
    throw new Error("There is an error");
  }

  const newCarName: string = carName.replace(/[^a-zA-Z]/g, "").toUpperCase();
  const carValue: number =
    [...newCarName].reduce(
      (sum: number, char: string) =>
        sum + char.charCodeAt(0) - "A".charCodeAt(0) + 1,
      0
    ) *
      100 +
    year;

  return carValue;
};
