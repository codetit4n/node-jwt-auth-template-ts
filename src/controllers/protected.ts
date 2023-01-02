import { Request, Response } from "express";

// sample controller - it will be executed after the JWT validation.
export const sampleController = async (req: Request, res: Response) => {
    res.status(200).json({ data: 'This is only accessible using JWT', user: req.user })
}