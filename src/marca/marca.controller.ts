import { Body, Controller, Delete, Get, Param, Put, Post } from "@nestjs/common";
import { MarcaService } from "./marca.service";
import { MarcaEntity } from "./marca.entity";
import { MarcaDto } from "./marca.dto";

@Controller('marcas')
export class MarcaController {
    constructor(private marcaService: MarcaService) {}

    @Get()
    findAll(): Promise<MarcaEntity[]> {
        return this.marcaService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.marcaService.findById(id);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.marcaService.remove(id);
    }

    @Post()
    create(@Body() dto: MarcaDto) {
        return this.marcaService.create(dto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() dto: MarcaDto) {
        return this.marcaService.update({ ...dto, id});
    }
}