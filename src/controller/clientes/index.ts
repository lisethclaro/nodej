import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient() 


const Getclientes = async (req: Request, res: Response) => {
   try{
      const result = await prisma.clientes.findMany();
      res.status(200).json(result);
    }catch (error){
     console.log("se presento un error", error);
     res.status(500).json(error);

    }
}

const Getcliente = async (req: Request, res: Response) => {
    const {id} = req.params;
    try{
       const result = await prisma.clientes.findUnique({
         where: {id: parseInt(id)}
       });
       res.status(200).json(result);
     }catch (error){
      console.log("se presento un error", error);
      res.status(500).json(error);
 
     }
}

const Postcliente = async (req: Request, res: Response) => {
  try{
    const result = await prisma.clientes.create({data: req.body});
    res.status(200).json(result);
  }catch (error){
    console.log("se presento un error", error);
    res.status(500).json(error);
 
  }
}

const Updatecliente = async (req: Request, res: Response) => {
    const {id} = req.params;
    const { body } = req;
    try{
       const result = await prisma.clientes.update({
         where: {id: parseInt(id)},
         data: body
       });
       res.status(200).json(result);
     }catch (error){
      console.log("se presento un error", error);
      res.status(500).json(error);
 
     }
}

const Deletecliente = async (req: Request, res: Response) => {
    const {id} = req.params;
    try{
       const result = await prisma.clientes.delete({
         where: {id: parseInt(id)}
       });
       res.status(200).json(result);
     }catch (error){
      console.log("se presento un error", error);
      res.status(500).json(error);
 
     }
}

export {
    Getclientes,
    Getcliente,
    Postcliente,
    Updatecliente,
    Deletecliente
}
