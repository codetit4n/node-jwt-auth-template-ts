"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerValidation = void 0;
const zod_1 = require("zod");
const User = require('../models/User');
// Zod Validations
const registerSchema = zod_1.z.object({
    name: zod_1.z.string().min(3),
    email: zod_1.z.string().min(6).email(),
    password: zod_1.z.string().min(6)
}).strict();
const registerValidation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // validating using joi
    const parsed = registerSchema.safeParse(req.body);
    if (!parsed.success)
        res.status(400).send(parsed.error);
    else {
        // checking to see if the user is already registered
        const emailExist = yield User.findOne({ email: req.body.email });
        if (emailExist)
            res.status(400).send('Email already exists!!!');
        else
            next();
    }
});
exports.registerValidation = registerValidation;
