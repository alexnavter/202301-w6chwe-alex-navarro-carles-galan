import { type NextFunction, type Response, type Request } from "express";
import { getRobots } from "./RobotsControllers";

describe("Given the getRobots controller", () => {
  describe("When it receives a response object", () => {
    const req = {} as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as Partial<Response>;
    const next: NextFunction = jest.fn();

    test("Then it should call its 'status' method with code 200", async () => {
      const expectedStatusCode = 200;

      await getRobots(req, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its 'json' method", async () => {
      await getRobots(req, res as Response, next);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
