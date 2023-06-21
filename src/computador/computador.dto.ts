import { Type } from 'class-transformer';
import { MarcaDto } from 'src/marca/marca.dto';
import {
    IsDateString,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUUID,
    ValidateNested,
    IsNumber
  } from 'class-validator';
  
  export class ComputadorDto {
    @IsUUID()
    @IsOptional()
    id?: string;
  
    @IsString()
    @IsNotEmpty()
    descricao: string;
  
    @IsOptional()
    @Type(() => MarcaDto)
    @ValidateNested()
    marca: MarcaDto;

    @IsDateString()
    @IsOptional()
    valor: number;
  
    @IsString()
    @IsOptional()
    garantia: number;
  }