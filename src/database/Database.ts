import { DataSource } from "typeorm";


class Database {
    conectDatabase(){
        return new DataSource({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "jotaerre01",
            database: "test",
            // entities: [Photo],
            synchronize: true,
            logging: false,
        }).initialize();
    }
}

export default Database;
