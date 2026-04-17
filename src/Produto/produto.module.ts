import { TypeOrmModule } from "@nestjs/typeorm";
import { Produto } from "./entities/produto.entity";
import { Module } from "@nestjs/common";
import { produtoController } from "./controllers/produto.controller";
import { ProdutoService } from "./model/services/produto.service";

@Module({
    imports:[TypeOrmModule.forFeature([Produto])],
    exports:[ProdutoService],
    providers:[ProdutoService],
    controllers:[produtoController]
})

export class produtoModule{}