import { Request, Response, NextFunction } from "express";

import { z } from "zod";
import User from "../models/User";

// zod Validations
const registerSchema = z.object({
    name: z.string().min(3),
    email: z.string().min(6).email(),
    password: z.string().min(6)
}).strict();

type RequestBody = {
    email: string;
}
export const registerValidation = async (req: Request, res: Response, next: NextFunction) => {
    // validating using zod
    const parsed = registerSchema.safeParse(req.body);
    if (!parsed.success)
        res.status(400).send(parsed.error)
    else {
        const { email: emailFromBody }: RequestBody = req.body;
        // checking to see if the user is already registered
        const emailExist = await User.findOne({ email: emailFromBody })
        if (emailExist)
            res.status(400).send('Email already exists!!!')
        else
            next();
    }
}
