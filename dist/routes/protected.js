"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const verify_token_1 = require("../middleware/verify-token");
const protected_1 = require("../controllers/protected");
router.get('/', verify_token_1.verify, protected_1.sampleController);
exports.default = router;
