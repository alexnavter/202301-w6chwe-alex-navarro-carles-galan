import { type Response, type Request } from "express";
import Robot from "../../database/models/Robot.js";
import { type RobotsStructure, type RobotStructure } from "../../types.js";
import { getRobots } from "./RobotsControllers.js";

const mockTerminatorRobot: RobotStructure = {
  name: "Terminator",
  url: "",
  _id: "11",
  specs: {
    speed: 1,
    endurance: 1,
    creationDate: "",
  },
};

const mockRobotsList: RobotsStructure = [
  mockTerminatorRobot,
  {
    name: "C3PO",
    url: "",
    _id: "22",
    specs: {
      speed: 1,
      endurance: 1,
      creationDate: "",
    },
  },
];

beforeEach(() => jest.restoreAllMocks());

describe("Given a getRobots controller", () => {
  describe("When it receives a response", () => {
    test("Then it should call its status method with 200", async () => {
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockResolvedValue(mockRobotsList),
      } as Partial<Response>;
      const req = {} as Request;
      const next = jest.fn();
      const expectedStatusCode = 200;

      Robot.find = jest.fn().mockImplementationOnce(() => ({
        exec: jest.fn().mockReturnValue(mockRobotsList),
      }));

      await getRobots(req, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its json method", async () => {
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockResolvedValue(mockRobotsList),
      } as Partial<Response>;
      const req = {} as Request;
      const next = jest.fn();
      Robot.find = jest.fn().mockImplementationOnce(() => ({
        exec: jest.fn().mockReturnValue(mockRobotsList),
      }));

      await getRobots(req, res as Response, next);

      expect(res.json).toHaveBeenCalledWith({ robots: mockRobotsList });
    });
  });
});
