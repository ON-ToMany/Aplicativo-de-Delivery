import { Entity, PrimaryGeneratedColumn,Column, ManyToOne, OneToMany} from "typeorm";
import { IsNotEmpty } from "class-validator";
import { Transform } from "class-transformer";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Usuario } from "../../Usuario/entity/usuario.entity";


@Entity({"name":"tb_produtos"})
export class Produto{
@PrimaryGeneratedColumn()
id!:number

// eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
@Transform(({ value }) => (value ? value.trim() : value))
@Column({length:255,nullable:false})
@IsNotEmpty()
nome!:string


// eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
@Transform(({ value }) => (value ? value.trim() : value))
@Column({length:255,nullable:false})
@IsNotEmpty()
descricao_Alimentar!:string

@ManyToOne(() => Usuario ,(x) => x.produto)
@ManyToOne(() => Categoria, (categoria) => categoria.produto)
categoria: Categoria ;
usuario:Usuario ;

@Column({ type: 'decimal', precision: 10, scale: 2 })
  calorias: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  gordura_total: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  gordura_saturada: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  acucar: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  sodio: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  fibra: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  proteina: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  frutas_vegetais_percentual: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  nutri_score: number;

  @Column({ type: 'varchar', length: 1 }) 
  nutri_score_letra: string;


}