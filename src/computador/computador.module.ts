import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ComputadorEntity } from './computrador.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ComputadorEntity])],
})
export class ComputadorModule {}