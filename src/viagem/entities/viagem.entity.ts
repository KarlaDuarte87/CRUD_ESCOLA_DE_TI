import { Destino } from "src/destino/entities/destino.entity";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany  } from "typeorm";


@Entity({schema:'viagem_bd', name:'viagem'})
export class Viagem {

@PrimaryGeneratedColumn({type: 'bigint' , primaryKeyConstraintName:'pk_viagem'})
idKey:number;

@Column({type: 'text', nullable: false, unique: true})
nome: string;

@Column({type: 'bigint', nullable: false, unique: true})
valor: number;

@CreateDateColumn({type: 'timestamp', name: 'dataSaida'})
dataSaida: Date;

@UpdateDateColumn({ type: 'timestamp', name: 'dataChegada' })
dataChegada: Date;



@Column({ type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  data_cadastro: Date;

  @OneToMany(() Destino, destino => destino.idKey)
  @JoinColumn({ name: 'idkey', referencedColumnName: 'idkey', foreignKeyConstraintName: 'fk_destino'})
  destino: Destino;
}

