import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export default class Usuarios {

    // Atributos
    @PrimaryGeneratedColumn("increment")
    id!: number;

    @Column({ type: 'varchar', length: 20 })
    nombre!: string;

    @Column({ type: 'varchar', unique: true })
    email!: string;
    
    @Column('boolean')
    estado!: boolean;
}

