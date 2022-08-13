import express from 'express';
import methodOverride from 'method-override';
import dbConn from '../config/db.config.js';
import router from '../routes/index.route.js';
import error from './error.middleware.js';

const middleware = (app) => {
    dbConn();
    app.use(express.urlencoded({ extended: false }));
    app.set('view engine', 'ejs');
    app.use(methodOverride('_method'));

    app.use(router);
    app.use(error);
}

export default middleware;