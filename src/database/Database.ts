import { DataSource, DataSourceOptions } from "typeorm";
import Usuarios from '../models/Usuarios';

class Database {
    private db: DataSourceOptions = {
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "jotaerre01",
        database: "node",
        entities: [Usuarios],
        synchronize: true,
        logging: false,
    }

    getDb() {
        return new DataSource(this.db);
    }

    conectDatabase(){
        return new DataSource(this.db).initialize();
    }

    managerORM(){
        return new DataSource(this.db).manager;
    }
}

export default Database;
