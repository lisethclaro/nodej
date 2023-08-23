import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient() 

const Getpedidos = async (req: Request, res: Response) => {
   try{
      const result = await prisma.pedidos.findMany({include: {cliente: true}});
      res.status(200).json(result);
    }catch (error){
     console.log("se presento un error", error);
     res.status(500).json(error);

    }
}

const Getpedido = async (req: Request, res: Response) => {
    const {id} = req.params;
    try{
       const result = await prisma.pedidos.findUnique({
         where: {id: parseInt(id)},
         include: {cliente:true}
       });
       res.status(200).json(result);
     }catch (error){
      console.log("se presento un error", error);
      res.status(500).json(error);
 
     }
}

const Postpedido = async (req: Request, res: Response) => {
  try{
    const result = await prisma.pedidos.create({data: req.body});
    res.status(200).json(result);
  }catch (error){
    console.log("se presento un error", error);
    res.status(500).json(error);
 
  }
}

const Updatepedido = async (req: Request, res: Response) => {
    const {id} = req.params;
    const { body } = req;
    try{
       const result = await prisma.pedidos.update({
         where: {id: parseInt(id)},
         data: body
       });
       res.status(200).json(result);
     }catch (error){
      console.log("se presento un error", error);
      res.status(500).json(error);
 
     }
}

const Deletepedido = async (req: Request, res: Response) => {
    const {id} = req.params;
    try{
       const result = await prisma.pedidos.delete({
         where: {id: parseInt(id)}
       });
       res.status(200).json(result);
     }catch (error){
      console.log("se presento un error", error);
      res.status(500).json(error);
 
     }
}

export {
    Getpedidos,
    Getpedido,
    Postpedido,
    Updatepedido,
    Deletepedido
}
