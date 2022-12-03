import { NextFunction, Request, Response } from 'express';
import { data } from "../data/db";
// get all posts
export const getAllRoutes = async (req: Request, res: Response) => {
    try {
        res.status(200).json(data);
    } catch (err) {
        res.status(400).send("Data error")
    }
};