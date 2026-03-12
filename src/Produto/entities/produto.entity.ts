import { Entity, PrimaryGeneratedColumn,Column, ManyToOne} from "typeorm";
import { IsNotEmpty } from "class-validator";
import { Transform } from "class-transformer";


@Entity({"name":"tb_produtos"})
export class Produto{
@PrimaryGeneratedColumn()
id!:number

@Transform(({ value }) => (value ? value.trim() : value))
@Column({length:255,nullable:false})
@IsNotEmpty()
nome!:string


@Transform(({ value }) => (value ? value.trim() : value))
@Column({length:255,nullable:false})
@IsNotEmpty()
decricao_Alimentar!:string




}