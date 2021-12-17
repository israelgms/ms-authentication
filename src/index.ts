import express, {Request, Response, NextFunction} from 'express'

const app = express();

app.get('/status', (req: Request, res: Response , next: NextFunction) => {
    res.status(200).send({ welcome: 'Bem vindo' });
})

app.listen(3000, () => {
    console.log('Executando na porta 3000')
})