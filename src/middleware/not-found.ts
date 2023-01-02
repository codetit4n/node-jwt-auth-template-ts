import { RequestHandler } from "express"
export const notFound: RequestHandler = (req, res) => res.status(404).send('Route does not exist!')