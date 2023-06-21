import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MarcaEntity } from "./marca.entity";
import { MarcaDto } from './marca.dto';

@Injectable()
export class MarcaService {
    constructor(
        @InjectRepository(MarcaEntity)
        private readonly marcaRepository: Repository<MarcaEntity>,
    ) {}

    findAll(): Promise<MarcaEntity[]> {
        return this.marcaRepository.find();
    }

    async findById(
      id: string,
      relations: string[] = [],
      ): Promise<MarcaEntity> {
      const marca = await this.marcaRepository.findOne({
        relations,
        where: { id }
      });
      if (!marca) {
        throw new NotFoundException(`Nenhuma marca encontrada com o código ${id}`);
      }
      return marca;
    }

    async findComputadoresByMarcaId(id: string) {
      const marca = await this.findById(id, ['marcas']);
      return marca.computadores;
    }
  
    async remove(id: string) {
      const marca = await this.findById(id);
      if (marca.computadores.length > 0) {
        throw new BadRequestException('Não foi possível excluir a marca. Existe(m) computador(es) vinculados a mesma!');
      }
      await this.marcaRepository.remove(marca);
      return { ...marca, id };
    }
  
    async create(dto: MarcaDto) {
      this.validate(dto);
      const newMarca = this.marcaRepository.create(dto);
      return this.marcaRepository.save(newMarca);
    }
  
    async update(dto: MarcaDto) {
      await this.findById(dto.id);
      this.validate(dto);
      return this.marcaRepository.save(dto);
    }
  
    validate(dto: MarcaDto) {
      if (dto.nome = '') {
        throw new BadRequestException('O nome da marca deve ser informado');
      }
      if (dto.nome == 'Positivo') {
        throw new BadRequestException('Marca inválida!');
      }
    }
}