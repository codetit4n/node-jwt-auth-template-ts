import { Request, Response, NextFunction } from "express";

import { z } from "zod";
const User = require('../models/User');

// Zod Validations
const registerSchema = z.object({
    name: z.string().min(3),
    email: z.string().min(6).email(),
    password: z.string().min(6)
}).strict();


export const registerValidation = async (req: Request, res: Response, next: NextFunction) => {
    // validating using joi
    const parsed = registerSchema.safeParse(req.body);
    if (!parsed.success)
        res.status(400).send(parsed.error)
    else {
        // checking to see if the user is already registered
        const emailExist = await User.findOne({ email: req.body.email })
        if (emailExist)
            res.status(400).send('Email already exists!!!')
        else
            next();
    }
}
