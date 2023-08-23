import { Request, Response, NextFunction } from "express";

export const updatedateMiddleware = (req: Request, res: Response, next:NextFunction) => {

    if(req.method === 'POST' || req.method === 'PUT' || req.method === 'PATCH'){
     const currentDate = new Date();
     
     //@ts-ignore
     req.body.fecha_actualizacion = currentDate;
     return next();

    }else{
        return next();
    }
}