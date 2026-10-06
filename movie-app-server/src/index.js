import express from 'express';
import moviesRouter from './routes/movies.routes.js';
import { sequelize } from './db.js';

import Movie from './models/Movie.js';

const app = express();

const port = 3000;

try {
    app.use(express.json());
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', '*');
        next();
    });
    app.listen(port);
    app.use(moviesRouter);
    await sequelize.sync();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

console.log(`Server is running on port ${port}`); 