import { type NextFunction, type Request, type Response } from "express";
import { CustomError } from "../../CustomError/CustomError";
import { generalError, notFoundError } from "./errorMiddleware";

describe("Given a notFoundError middleware", () => {
  describe("When it receives a Request, a Response and a nextFunction", () => {
    test("Then it should next a notFoundError with the 'Path not found' message and a status 404", () => {
      const request = {} as Request;
      const response = {
        status: jest.fn(),
        send: jest.fn().mockReturnThis(),
      } as Partial<Response>;
      const next = jest.fn() as NextFunction;

      notFoundError(request, response as Response, next);

      expect(next).toHaveBeenCalled();
    });
  });
});

describe("Given a generalError middleware", () => {
  describe("When it receives an status 500 error and a response", () => {
    test("Then it should invoke the status method 500", () => {
      const request = {} as Request;
      const response = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      } as Partial<Response>;
      const next = jest.fn() as NextFunction;

      const status = 500;
      const error = new CustomError("Path not found", status, "Bad Getaway");

      generalError(error, request, response as Response);

      expect(response.status).toHaveBeenCalledWith(status);
    });
  });
});
