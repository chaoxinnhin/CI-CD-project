import * as carValueAPI from "../services/carValueAPIServices";
import { CarData } from "../types/CarData";
import { Request, Response } from "express";

export const calculateCarValue = (request: Request, response: Response) => {
  const { model, year, car_value }: CarData = request.body;

  const inputs: CarData = { model, year, car_value };

  const value = carValueAPI.calculateCarValue(inputs);
  const finalValue = { model, year, car_value: value };
  response.send(value);
};

export const carValidationGrace = (request: Request, response: Response) => {
  const { model, year, car_value }: CarData = request.body;

  const inputs: CarData = { model: "Grace", year: 2008, car_value: 0 };

  const value = carValueAPI.calculateCarValue(inputs);

  const finalValue = { model: "Grace", year: 2008, car_value: value };
  response.send(finalValue);
};

export const calculateNumberAndTextValue = (
  request: Request,
  response: Response
) => {
  const { model, year, car_value }: CarData = request.body;

  const inputs: CarData = { model: "Bt-50D", year: 2010, car_value: 0 };

  const value = carValueAPI.calculateCarValue(inputs);

  const finalValue = { model: "Bt-50D", year: 2010, car_value: value };
  response.send(finalValue);
};

export const calculateNumberOnlyValue = (
  request: Request,
  response: Response
) => {
  const { model, year, car_value }: CarData = request.body;

  const inputs: CarData = { model: "380", year: 2015, car_value: 0 };

  const value = carValueAPI.calculateCarValue(inputs);
  const finalValue = { model: "380", year: 2015, car_value: value };
  response.send(finalValue);
};

export const validateLongNames = (request: Request, response: Response) => {
  const inputs: CarData = {
    model: "Mondeo Ambiente WGN",
    year: 2015,
    car_value: 0,
  };

  try {
    const value = carValueAPI.nameValidation(inputs);
  } catch (error) {
    response.status(404).send(error);
  }
};

export const calculateCamryValue = (request: Request, response: Response) => {
  const { model, year, car_value }: CarData = request.body;

  const inputs: CarData = { model: "Camry", year: 1983, car_value: 0 };

  const value = carValueAPI.calculateCarValue(inputs);
  const finalValue = { model: "Camry", year: 1983, car_value: value };
  response.send(finalValue);
};

export const longYearValidation = (request: Request, response: Response) => {
  const { model, year, car_value }: CarData = request.body;

  const inputs: CarData = { model: "Dragon", year: 20234234, car_value: 0 };

  try {
    const value = carValueAPI.yearValidation(inputs);
  } catch (error) {
    response.status(404).send(error);
  }
};
