// backend/config/jwt.js

const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'supersecret'; // Configure o segredo no .env

module.exports = {
    sign: (payload) => {
        return jwt.sign(payload, secret, { expiresIn: '1h' });
    },
    verify: (token) => {
        return jwt.verify(token, secret);
    }
};
