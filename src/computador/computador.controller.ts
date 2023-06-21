import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
import { ComputadorService } from "./computador.service";
import { ComputadorEntity } from "./computador.entity";
import { ComputadorDto } from './computador.dto';

@Controller('computadores')
export class ComputadorController {
    constructor(private computadorService: ComputadorService) {}

    @Get()
    findAll(): Promise<ComputadorEntity[]> {
        return this.computadorService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string) {
      return this.computadorService.findById(id);
    }
  
    @Delete(':id')
    async remove(@Param('id') id: string) {
      return await this.computadorService.remove(id);
    }
  
    @Post()
    create(@Body() dto: ComputadorDto) {
      return this.computadorService.create(dto);
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() dto: ComputadorDto) {
      return this.computadorService.update({ ...dto, id });
    }
}