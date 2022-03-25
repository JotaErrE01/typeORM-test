import Server from './models/Server';
import Database from './database/Database';

// conectar db
export const db = new Database().getDb();
db.initialize()
    .then(() => {
        console.log('Database is connected');
    })
    .catch(err => {
        console.log('Error: ', err);
    })

const server = new Server();

server.listen();
server.routes();
