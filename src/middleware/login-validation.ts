import { Request, Response, NextFunction } from 'express'
import { z } from "zod";
import bcrypt from 'bcryptjs'
import User from '../models/User';


// Zod Validations
const loginSchema = z.object({
    email: z.string().min(6).email(),
    password: z.string().min(6)
}).strict();

export const loginValidation = async (req: Request, res: Response, next: NextFunction) => {
    // validating using joi
    const parsed = loginSchema.safeParse(req.body);
    if (!parsed.success)
        res.status(400).send(parsed.error)
    else {
        // checking if the email exists
        const user = await User.findOne({ email: req.body.email })
        if (user) {
            // checking if the password is correct
            const validPass = await bcrypt.compare(req.body.password, user.password)
            if (validPass) {
                req.userId = user._id;
                next();
            }
            else
                res.status(400).send('Invalid Email or Password!!!')
        }
        else
            res.status(400).send('Invalid Email or Password!!!')
    }

}