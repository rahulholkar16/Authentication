import type { NextFunction, Request, Response } from "express";
import type { AsyncHandler } from "../types/index.js";

export const asyncHandler: AsyncHandler = (fn) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};