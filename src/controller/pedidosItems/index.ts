import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient() 

const GetpedidosItems = async (req: Request, res: Response) => {
   try{
      const result = await prisma.pedidosItems.findMany({
        include: {
          pedido: {
            include: {
              cliente: true,
            },
          },
          producto: {
            include:{
               categoria: true
            }
          }
        },
      });
      res.status(200).json(result);
    }catch (error){
     console.log("se presento un error", error);
     res.status(500).json(error);

    }
}

const GetpedidoItems = async (req: Request, res: Response) => {
    const {id} = req.params;
    try{
       const result = await prisma.pedidosItems.findUnique({
         where: {id: parseInt(id)},
         
          include: {
            pedido: {
              include: {
                cliente: true,
              },
            },
            producto: {
              include:{
                 categoria: true
              }
            }
          },
        });
       res.status(200).json(result);
     }catch (error){
      console.log("se presento un error", error);
      res.status(500).json(error);
 
     }
}

const PostpedidoItems = async (req: Request, res: Response) => {
  try{
    const result = await prisma.pedidosItems.create({data: req.body});
    res.status(200).json(result);
  }catch (error){
    console.log("se presento un error", error);
    res.status(500).json(error);
 
  }
}

const UpdatepedidoItems = async (req: Request, res: Response) => {
    const {id} = req.params;
    const { body } = req;
    try{
       const result = await prisma.pedidosItems.update({
         where: {id: parseInt(id)},
         data: body
       });
       res.status(200).json(result);
     }catch (error){
      console.log("se presento un error", error);
      res.status(500).json(error);
 
     }
}

const DeletepedidoItems = async (req: Request, res: Response) => {
    const {id} = req.params;
    try{
       const result = await prisma.pedidosItems.delete({
         where: {id: parseInt(id)}
       });
       res.status(200).json(result);
     }catch (error){
      console.log("se presento un error", error);
      res.status(500).json(error);
 
     }
}

export {
    GetpedidosItems,
    GetpedidoItems,
    PostpedidoItems,
    UpdatepedidoItems,
    DeletepedidoItems
}
