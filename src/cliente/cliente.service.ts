import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ClienteEntity } from "./cliente.entity";
import { ClienteDto } from './cliente.dto';

@Injectable()
export class ClienteService {
    constructor(
        @InjectRepository(ClienteEntity)
        private readonly clienteRepository: Repository<ClienteEntity>,
    ) {}

    findAll(): Promise<ClienteEntity[]> {
        return this.clienteRepository.find();
    }

    async findById(id: string): Promise<ClienteEntity> {
      const findOne = await this.clienteRepository.findOne({ where: { id } });
      if (findOne == null) {
        throw new NotFoundException(
          `Nenhum cliente encontrado com o código ${id}`,
        );
      }
      return findOne;
    }
  
    async remove(id: string) {
      const cliente = await this.findById(id);
      if (cliente.nome == 'admin') {
        throw new BadRequestException('Este cliente não pode ser removido!');
      }else {
        await this.clienteRepository.remove(cliente);
        return { ...cliente, id };
      }
    }
  
    async create(dto: ClienteDto) {
      this.validate(dto);
      const newCliente = this.clienteRepository.create(dto);
      return this.clienteRepository.save(newCliente);
    }
  
    async update(dto: ClienteDto) {
      await this.findById(dto.id);
      this.validate(dto);
      return this.clienteRepository.save(dto);
    }
  
    validate(dto: ClienteDto) {
      if (new Date().getTime() < new Date(dto.dataNascimento).getTime()) {
        throw new BadRequestException('A data de nascimento do cliente não pode ser menor que a data atual!');
      }
      if (dto.nome.length <= 3) {
        throw new BadRequestException('O nome do cliente tem menos de 3 caracteres!');
      }
    }
}