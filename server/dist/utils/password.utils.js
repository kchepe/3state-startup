"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.hashPassword = void 0;
const bcrypt = require("bcrypt");
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
};
exports.hashPassword = hashPassword;
const comparePassword = async (userPassword, rawPassword) => {
    return await bcrypt.compare(rawPassword, userPassword);
};
exports.comparePassword = comparePassword;
//# sourceMappingURL=password.utils.js.map