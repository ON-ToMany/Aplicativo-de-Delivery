import { InjectEntityManager, InjectRepository } from "@nestjs/typeorm";
import { Produto } from "../../entities/produto.entity";
import { Repository } from "typeorm";
import { DeleteResult } from "typeorm/browser";
import { HttpCode, HttpException, HttpStatus, Injectable } from "@nestjs/common";

@Injectable()
export class produtoService{
constructor( @InjectRepository(Produto) private readonly produto:Repository<Produto>){}


async findall():Promise<Produto[]>{
return await this.produto.find()


}
 async findbyid(id:number):Promise<Produto | null>{

return this.produto.findOne({where:{id},relations:{



}})

 }


 async create(produto:Produto):Promise<Produto>{
return this.produto.save(produto)

}


async delete(id:number):Promise<DeleteResult>{

return await this.produto.delete(id)

}

async findbyname(nome:string):Promise<Produto|null>{

    return await this.produto.findOne({where:{nome},relations:{


}})

}


async update(produto:Produto):Promise<Produto>{
 await this.findbyid(produto.id)
const buscarNomeProduto = await this.findbyname(produto.nome)

 if(buscarNomeProduto && buscarNomeProduto.id !== produto.id)
    
throw new HttpException("produto ja cadastrado",HttpStatus.NOT_FOUND)

return this.produto.save(produto)



}









}