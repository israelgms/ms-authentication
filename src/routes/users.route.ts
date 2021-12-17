import { Router, Request, Response, NextFunction, response } from 'express';

const usersRoute = Router();

usersRoute.get('/users',(req: Request, res: Response, next: NextFunction) => {
    const users = [{userName: 'Israel'}];
    res.status(200).send({ users });
})

export default usersRoute;