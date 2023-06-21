import { MarcaEntity } from 'src/marca/marca.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'computadores' })
export class ComputadorEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()    
    descricao: string;

    @ManyToOne(
        () => MarcaEntity,
        (marca) => marca.computadores,
        { eager: true},
    )
    @JoinColumn({
        name: 'id_marca',
        foreignKeyConstraintName: 'fk_marca',
        referencedColumnName: 'id',
    })
    marca: MarcaEntity;

    @Column()
    valor?: number;

    @Column()
    garantia?: number;
}