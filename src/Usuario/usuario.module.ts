import {  Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioService } from './services/usuario.services';
import { UsuarioController } from './controller/usuario.controller';
import { Usuario } from './entity/usuario.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Usuario]),],
  providers: [UsuarioService],
  controllers: [UsuarioController],
  exports: [UsuarioService],
})
export class UsuarioModule {}
