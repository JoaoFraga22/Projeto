import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ClienteEntity } from './cliente.entity';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';

@Module({
    imports: [TypeOrmModule.forFeature([ClienteEntity])],
    controllers: [ClienteController],
    providers: [ClienteService],
})
export class ClienteModule {}