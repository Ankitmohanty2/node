// require('dotenv').config({path: '../.env'});

import dotenv from 'dotenv';
import connectToDatabase from './db/db.js';

dotenv.config({path: '../.env'});



connectToDatabase ();



































/*
import express from 'express';
const app = express();


( async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.error("Error connecting to database");
            throw error;
        })

          app.listen(process.env.PORT, () => {
            console.log(`Server listening on port ${process.env.PORT}`);
        }
        );

    } catch (error) {
        console.error("Error connecting to database: ", error);
        throw error;
    }
}) ();

*/