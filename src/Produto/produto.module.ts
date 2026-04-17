import { TypeOrmModule } from "@nestjs/typeorm";
import { ProdutoController } from "./controllers/produto.controller";
import { Module } from "@nestjs/common";
import { ProdutoService } from "./services/produto.service";
import { Produto } from "./entities/produto.entity";
import { CategoriaModule } from "../categoria/categoria.module";


@Module({
    imports:[TypeOrmModule.forFeature([Produto]), CategoriaModule],
    exports:[],
    providers:[ProdutoService],
    controllers:[ProdutoController]
})

export class ProdutoModule{}