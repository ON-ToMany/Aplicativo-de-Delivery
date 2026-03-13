import {  InjectRepository } from "@nestjs/typeorm";
import { Produto } from "../../entities/produto.entity";
import { ILike, Repository } from "typeorm";
import { DeleteResult } from "typeorm/browser";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import calculeNutriscore from "nutriscore-2025";

@Injectable()
export class produtoService{
constructor( @InjectRepository(Produto) private readonly produto:Repository<Produto>){}

private calcNutriscore(produto: Produto): void {
  const { nutriscore } = calculeNutriscore({
    energy: produto.calorias,                 
    fibers: produto.fibra,
    proteins: produto.proteina,
    saturatedFats: produto.gordura_saturada,
    sodium: produto.sodio,
    sugar: produto.acucar,
    fruitsPercentage: produto.frutas_vegetais_percentual,
  });
  produto.nutri_score = nutriscore;
}
  async findall():Promise<Produto[]>{
    return await this.produto.find()
  }

  async findbyid(id:number):Promise<Produto | null>{
    const buscaproduto =  await this.produto.findOne({
      where:{id},
      relations:{
        usuario:true,
        categoria:true
      }
    })

    if (!buscaproduto)
      throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND);
      return buscaproduto
    }


  async create(produto:Produto):Promise<Produto>{
    this.calcNutriscore(produto); // realiza o calculo do nutriscore e retorna no body no compo nutri_score a letra correspondente ao nutriscore do produto
    return this.produto.save(produto)
  }


  async delete(id:number):Promise<DeleteResult>{
    return await this.produto.delete(id)
  }

  async findbyname(nome:string):Promise<Produto[]>{
    return await this.produto.find({
      where:{nome:ILike(`%${nome}%`)},
      relations:{
        usuario:true,
        categoria:true
      }
    })
  }

  async update(produto:Produto):Promise<Produto>{
    await this.findbyid(produto.id)
    this.calcNutriscore(produto);
    return  await this.produto.save(produto)
  }

}