import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient() 

const nameController = "Categorias"

const Getcategorias = async (req: Request, res: Response) => {
   try{
      const result = await prisma.categorias.findMany();
      res.status(200).json(result);
    }catch (error){
     console.log("se presento un error", error);
     res.status(500).json(error);

    }
}

const Getcategoria = async (req: Request, res: Response) => {
    const {id} = req.params;
    try{
       const result = await prisma.categorias.findUnique({
         where: {id: parseInt(id)}
       });
       res.status(200).json(result);
     }catch (error){
      console.log("se presento un error", error);
      res.status(500).json(error);
 
     }
}

const Postcategoria = async (req: Request, res: Response) => {
  try{
    const result = await prisma.categorias.create({data: req.body});
    res.status(200).json(result);
  }catch (error){
    console.log("se presento un error", error);
    res.status(500).json(error);
 
  }
}

const Updatecategoria = async (req: Request, res: Response) => {
    const {id} = req.params;
    const { body } = req;
    try{
       const result = await prisma.categorias.update({
         where: {id: parseInt(id)},
         data: body
       });
       res.status(200).json(result);
     }catch (error){
      console.log("se presento un error", error);
      res.status(500).json(error);
 
     }
}

const Deletecategoria = async (req: Request, res: Response) => {
    const {id} = req.params;
    try{
       const result = await prisma.categorias.delete({
         where: {id: parseInt(id)}
       });
       res.status(200).json(result);
     }catch (error){
      console.log("se presento un error", error);
      res.status(500).json(error);
 
     }
}

export {
    Getcategorias,
    Getcategoria,
    Postcategoria,
    Updatecategoria,
    Deletecategoria
}
