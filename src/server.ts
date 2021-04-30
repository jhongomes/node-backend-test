

import express, { Request, Response, NextFunction } from 'express';
import AppError from './errors/AppError';
import path from 'path';




const app = express();
app.use(express.json());

app.use((err: Error, resquest: Request, response: Response, _:NextFunction)=>{

    if(err instanceof AppError){
        return response
        .status(err.statusCode)
        .json({ status: 'error', message: err.message});

    }

    return response.status(500)
    .json({ status: 'error', message: err.message});
})


app.listen(3333);
