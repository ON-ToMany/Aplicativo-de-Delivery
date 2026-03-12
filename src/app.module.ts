import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './Produto/entities/produto.entity';
import { Categoria } from './categoria/entities/categoria.entity';
import { Usuario } from './Usuario/entity/usuario.entity';
import { produtoModule } from './Produto/produto.module';
import { CategoriaModule } from './categoria/categoria.module';
import { UsuarioModule } from './Usuario/usuario.module'; 

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      
      entities: [Produto, Categoria, Usuario], 
      synchronize: true,
      logging: true,
    }),
  
    produtoModule,
    CategoriaModule,
    UsuarioModule,
  ],
}) 
export class AppModule {}