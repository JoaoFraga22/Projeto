import {
    IsDateString,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUUID,
    IsEnum
  } from 'class-validator';
  import { GeneroEnum } from './genero.enum';
  
  export class ClienteDto {
    @IsUUID()
    @IsOptional()
    id?: string;
  
    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsEnum(GeneroEnum)
    @IsOptional()
    genero?: GeneroEnum;

    @IsDateString()
    @IsOptional()
    dataNascimento?: Date | string;
  
    @IsString()
    @IsNotEmpty()
    email: string;
  }