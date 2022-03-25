import express, { Application } from 'express';
import router from '../routes/usuario';

class Server {
    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        // this.app.use(express.static('public'));
        // this.app.use('/api/v1', require('./routes/index'));
        // this.listen();
    }

    routes(){
        this.app.use(router);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

export default Server;
