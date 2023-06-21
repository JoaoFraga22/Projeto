import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ComputadorEntity } from './computador.entity';
import { ComputadorService } from './computador.service';
import { ComputadorController } from './computador.controller';

@Module({
    imports: [TypeOrmModule.forFeature([ComputadorEntity])],
    controllers: [ComputadorController],
    providers: [ComputadorService],
})
export class ComputadorModule {}