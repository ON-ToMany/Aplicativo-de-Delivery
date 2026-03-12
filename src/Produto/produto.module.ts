import { TypeOrmModule } from "@nestjs/typeorm";
import { Produto } from "./entities/produto.entity";
import { Module } from "@nestjs/common";
import { produtoService } from "./model/services/produto.service";
import { produtoController } from "./controllers/produto.controller";

@Module({
imports:[TypeOrmModule.forFeature([Produto])],
exports:[produtoService],
providers:[produtoService],
controllers:[produtoController]


})

export class produtoModule{}