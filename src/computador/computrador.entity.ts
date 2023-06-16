import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'computadores' })
export class ComputadorEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nome: string;
}