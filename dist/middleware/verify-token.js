"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verify = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verify = (req, res, next) => {
    const auth = req.header('Authorization');
    if (!auth)
        return res.status(401).send('Access denied!!!');
    let token = auth.split(' ')[1];
    if (!token)
        return res.status(401).send('Access denied!!!');
    try {
        const verify = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.user = verify;
        next();
    }
    catch (err) {
        return res.status(400).send('Invalid token!!!');
    }
};
exports.verify = verify;
