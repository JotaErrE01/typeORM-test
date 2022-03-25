import { Request, Response } from 'express';
import Usuarios from '../models/Usuarios';
import Database from '../database/Database';

export const getUsuarios = (req: Request, res: Response) => {
    res.json({
        msg: 'obteniendo usuarios...'
    })
}

export const getUsuario = (req: Request, res: Response) => {
    res.json({
        msg: 'obteniendo usuario...'
    })
}

export const crearUsuario =  async (req: Request, res: Response) => {
    const { body } = req;
    const { nombre, email } = <{ nombre: string, email: string }>body;

    // const manager = new Database().managerORM();
    const repository = new Database().getDb().getRepository(Usuarios);
    const result = await repository.save({
        nombre,
        email,
        estado: true
    })

    if(result){
        res.json({
            msg: 'usuario creado',
            data: result
        })
    }else{
        res.json({
            msg: 'error al crear usuario'
        })
    }    
}
