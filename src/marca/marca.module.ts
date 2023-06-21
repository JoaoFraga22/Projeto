import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { MarcaEntity } from './marca.entity';
import { MarcaService } from './marca.service';
import { MarcaController } from './marca.controller';

@Module({
    imports: [TypeOrmModule.forFeature([MarcaEntity])],
    controllers: [MarcaController],
    providers: [MarcaService],
})
export class MarcaModule {}