import { Request, Response } from 'express';

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

export const postUsuario = (req: Request, res: Response) => {
    res.json({
        msg: 'posteando usuario...'
    })
}
