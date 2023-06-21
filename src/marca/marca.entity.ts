import { ComputadorEntity } from 'src/computador/computador.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'marcas' })
export class MarcaEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nome: string;

    @Column()
    sede: string;

    @Column({ type: 'date', name: 'data', nullable: true })
    data: Date;

    @Column()
    representante: string;

    @Column()
    contato: string

    @OneToMany(() => ComputadorEntity, (computador) => (computador.marca))
    computadores: ComputadorEntity[];
}