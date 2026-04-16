
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post,Put } from "@nestjs/common";
import { Produto } from "../entities/produto.entity";
import { DeleteResult } from "typeorm";
import { ProdutoService } from "../model/services/produto.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Produto')
@Controller("/produtos")
export class produtoController{
  constructor(private readonly produtoService: ProdutoService){}

  @Get()
  @HttpCode(HttpStatus.OK)
  findall():Promise<Produto[]>{
    return this.produtoService.findall()
  }

  @Get("/:id")
  @HttpCode(HttpStatus.FOUND)
  findById(@Param("id",ParseIntPipe ) id:number):Promise<Produto|null>{
    return this.produtoService.findbyid(id)
  }
   
  @Post("/cadastrar")
  @HttpCode(HttpStatus.CREATED)
  create(@Body()produto:Produto ):Promise<Produto>{
    return this.produtoService.create(produto)   
  }

  @Put("/atualizar")
  @HttpCode(HttpStatus.CREATED)
  update(@Body() produto:Produto):Promise<Produto>{
    return this.produtoService.update(produto)
  }

  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  findAllByName(@Param('nome') nome: string): Promise<Produto[]> {
    return this.produtoService.findbyname(nome);
  }

  @Delete("/:id")
  @HttpCode(HttpStatus.OK)
  delete(@Param("id",ParseIntPipe) id:number ):Promise<DeleteResult>{
    return this.produtoService.delete(id)
  }
}