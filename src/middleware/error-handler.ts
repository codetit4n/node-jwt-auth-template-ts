import { Response, Request, NextFunction, Errback } from "express"

export const errorHandlerMiddleware = async (err: Errback, req: Request, res: Response, next: NextFunction) => {
    console.log(err);
    return res.status(500).json({ msg: 'Something went wrong, please try again' })
}