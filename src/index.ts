import Server from './models/Server';
import Database from './database/Database';

// conectar db
const db = new Database();
try {
    db.conectDatabase();
} catch (error) {
    console.log(error);
    console.log('Error al conectar a la base de datos');
}

const server = new Server();

server.listen();
server.routes();
