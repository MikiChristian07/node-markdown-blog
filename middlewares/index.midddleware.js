import express from 'express';
import dbConn from '../config/db.config.js';
import router from '../routes/index.route.js';

const middleware = (app) => {
    dbConn();
    app.use(express.urlencoded({ extended: false }));
    app.set('view engine', 'ejs');

    app.use(router);
}

export default middleware;