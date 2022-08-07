import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { logger } from '../app.js';

dotenv.config();
const dbConn = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            logger.info('Connected to the database...');
        })
        .catch((error) => {
            logger.info('Error connecting to the databse');
            logger.error(error);
        });
};
export default dbConn;