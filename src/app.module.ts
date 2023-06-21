import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { ClienteModule } from './cliente/cliente.module';
import { MarcaModule } from './marca/marca.module';
import { ComputadorModule } from './computador/computador.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    ClienteModule,
    MarcaModule,
    ComputadorModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}