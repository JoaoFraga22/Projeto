import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ComputadorEntity } from "./computador.entity";
import { Repository } from "typeorm";
import { ComputadorDto } from "./computador.dto";

@Injectable()
export class ComputadorService {
    constructor(
        @InjectRepository(ComputadorEntity)
        private readonly computadorRepository: Repository<ComputadorEntity>,
    ) {}

    findAll(): Promise<ComputadorEntity[]> {
        return this.computadorRepository.find();
    }

    async findById(
      id: string,
      relations: string[] = [],
      ): Promise<ComputadorEntity> {
      const computador = await this.computadorRepository.findOne({
        relations,
        where: { id }
      });
      if (!computador) {
        throw new NotFoundException(`Nenhum computador encontrado com o código ${id}`);
      }
      return computador;
    }

    async findMarcaByComputadorId(id: string) {
      const computador = await this.findById(id, ['computadores']);
      return computador.marca;
    }
  
    async remove(id: string) {
      const computador = await this.findById(id);
      await this.computadorRepository.remove(computador);
      return { ...computador, id };
    }
  
    async create(dto: ComputadorDto) {
      this.validate(dto);
      const newMarca = this.computadorRepository.create(dto);
      return this.computadorRepository.save(newMarca);
    }
  
    async update(dto: ComputadorDto) {
      await this.findById(dto.id);
      this.validate(dto);
      return this.computadorRepository.save(dto);
    }
  
    validate(dto: ComputadorDto) {
      if (dto.descricao = '') {
        throw new BadRequestException('A descrição do computador deve ser informada!');
      }
      if (dto.valor <= 0) {
        throw new BadRequestException('O valor do computador deve ser maior que zero!');
      }
      if (dto.marca.representante == 'admin') {
        throw new BadRequestException('Esta marca não pode ser utilizada!');
      }
    }
}