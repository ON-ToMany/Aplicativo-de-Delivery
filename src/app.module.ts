import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { produtoModule } from './Produto/produto.module';
import { CategoriaModule } from './categoria/categoria.module';
import { UsuarioModule } from './Usuario/usuario.module'; 
import { AppController } from './app.controller';
import { ProdService } from './data/services/prod.service';

@Module({
  imports:[ConfigModule.forRoot(),
  TypeOrmModule.forRootAsync({
	useClass: ProdService,
    imports: [ConfigModule],
  }), 
    produtoModule,
    CategoriaModule,
    UsuarioModule,
  ],
  controllers: [AppController],
  providers: [],
}) 
export class AppModule {}