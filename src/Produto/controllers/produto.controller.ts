import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post,Put } from "@nestjs/common";
import { Produto } from "../entities/produto.entity";
import { produtoService } from "../model/services/produto.service";
import { id } from "date-fns/locale";
import { DeleteResult } from "typeorm";

@Controller("/produto")
export class produtoController{
    constructor(private produto:produtoService){}
    @Get()
    @HttpCode(HttpStatus.OK)
    findall():Promise<Produto[]>{
        return this.produto.findall()
    }



    @Get("/:id")
    @HttpCode(HttpStatus.FOUND)
    findById(@Param("id",ParseIntPipe ) id:number):Promise<Produto|null>{

    return this.produto.findbyid(id)

    }
   
    @Post("/cadastrar")
    @HttpCode(HttpStatus.CREATED)
    create(@Body()produto:Produto ):Promise<Produto>{
    return this.produto.create(produto)
         
    }

    @Put("/atualizar")
    @HttpCode(HttpStatus.CREATED)
    update(@Body() produto:Produto):Promise<Produto>{
  return this.produto.update(produto)

    }

@Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  findAllByName(@Param('nome') nome: string): Promise<Produto[]> {
    return this.produto.findbyname(nome);
  }




    @Delete("/:id")
    @HttpCode(HttpStatus.OK)
    delete(@Param("id",ParseIntPipe) id:number ):Promise<DeleteResult>{

    return this.produto.delete(id)

    }


}