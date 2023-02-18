import { type NextFunction, type Response, type Request } from "express";
import { Robot, robotSchema } from "../../database/models/Robot.js";
import { getRobots } from "./RobotsControllers.js";

describe("Given the getRobots controller", () => {
  describe("When it receives a response", () => {
    test("Then it should call its 'status' method with code 200", async () => {
      const req = {} as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockResolvedValue({}),
      } as Partial<Response>;
      const next = jest.fn();
      const expectedStatusCode = 200;

      Robot.find = jest.fn().mockReturnValue({});
      await getRobots(req, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its 'json' method", async () => {
      const req = {} as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockResolvedValue({}),
      } as Partial<Response>;
      const next = jest.fn();

      Robot.find = jest.fn().mockReturnValue({});
      await getRobots(req, res as Response, next);

      expect(res.json).toHaveBeenCalledWith({ robots: {} });
    });
  });
});
