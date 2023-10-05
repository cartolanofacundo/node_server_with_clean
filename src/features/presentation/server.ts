import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Express } from 'express';

export class Server {
    app: Express;
    port: number | string | undefined;
    paths: { [key: string]: string };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.paths = {
            users: '/api/users',
            auth: '/api/auth',
        };
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(bodyParser.json());
        this.app.use(cors());
    }

    routes() {
        this.app.use('/api', (req, res) => { return res.status(200).json({ message: 'Welcome to the API' }) });
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server run on http://localhost:${this.port}`);
        });
    }
}