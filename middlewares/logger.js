const express = require('express');
const app = express();

const logger = (req, res, next) => {
    const d = new Date();
    console.log(req.url, req.method, d.getFullYear());
    next();
}

module.exports = { logger };