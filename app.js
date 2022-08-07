import express from 'express';
import pino from 'pino';
import middleware from './middlewares/index.midddleware.js'

export const logger = pino();
const app = express();

middleware(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    logger.info(`App is running on port ${PORT}`);
})