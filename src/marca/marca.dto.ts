import {
    IsDateString,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUUID,
  } from 'class-validator';
  
  export class MarcaDto {
    @IsUUID()
    @IsOptional()
    id?: string;
  
    @IsString()
    @IsNotEmpty()
    nome: string;
  
    @IsString()
    @IsOptional()
    sede: string;

    @IsDateString()
    @IsOptional()
    data?: Date | string;
  
    @IsString()
    @IsOptional()
    representante: string;
  
    @IsString()
    @IsOptional()
    contato: string;
  }