import express from 'express';
import pino from 'pino'

const logger = pino();
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    logger.info(`App is running on port ${PORT}`);
})