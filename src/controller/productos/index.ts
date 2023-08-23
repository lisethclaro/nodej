import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient() 

const Getproductos = async (req: Request, res: Response) => {
   try{
      const result = await prisma.productos.findMany({include: {categoria: true}});
      res.status(200).json(result);
    }catch (error){
     console.log("se presento un error", error);
     res.status(500).json(error);

    }
}

const Getproducto = async (req: Request, res: Response) => {
    const {id} = req.params;
    try{
       const result = await prisma.productos.findUnique({
         where: {id: parseInt(id)},
         include: {categoria: true}
       });
       res.status(200).json(result);
     }catch (error){
      console.log("se presento un error", error);
      res.status(500).json(error);
 
     }
}

const Postproducto = async (req: Request, res: Response) => {
  try{
    const result = await prisma.productos.create({data: req.body});
    res.status(200).json(result);
  }catch (error){
    console.log("se presento un error", error);
    res.status(500).json(error);
 
  }
}

const Updateproducto = async (req: Request, res: Response) => {
    const {id} = req.params;
    const { body } = req;
    try{
       const result = await prisma.productos.update({
         where: {id: parseInt(id)},
         data: body
       });
       res.status(200).json(result);
     }catch (error){
      console.log("se presento un error", error);
      res.status(500).json(error);
 
     }
}

const Deleteproducto = async (req: Request, res: Response) => {
    const {id} = req.params;
    try{
       const result = await prisma.productos.delete({
         where: {id: parseInt(id)}
       });
       res.status(200).json(result);
     }catch (error){
      console.log("se presento un error", error);
      res.status(500).json(error);
 
     }
}

export {
    Getproductos,
    Getproducto,
    Postproducto,
    Updateproducto,
    Deleteproducto
}
