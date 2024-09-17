
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany  } from "typeorm";

@Entity({schema: 'destino', name:'destino'})
export class Destino {

@PrimaryGeneratedColumn({type: 'bigint' , primaryKeyConstraintName:'pkDestino'})
idKey:number;

@Column({type: 'text', nullable: false, unique: true})
nome: string;

}
