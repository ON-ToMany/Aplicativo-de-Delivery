import { Entity, PrimaryGeneratedColumn,Column, ManyToOne, OneToMany} from "typeorm";
import { IsNotEmpty } from "class-validator";
import { Transform } from "class-transformer";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Usuario } from "../../Usuario/entity/usuario.entity";

@Entity({name:"tb_produtos"})
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

  // negativo
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  calorias: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  gordura_total: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  gordura_saturada: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  acucar: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  sodio: number;

  //positivo
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  fibra: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  proteina: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  frutas_vegetais_percentual: number;

  // no momento do teste, quando for cadastrar um alimento, esse campo não deve ser incluido no momento do cadastro, ele é retornado automaticamente depois pela service
  // porque ele é calculado com base nos valores dos outros atributos.
  @Column({ type: 'varchar', length: 1}) 
  nutri_score: string;

  @ManyToOne(() => Usuario ,(x) => x.produto)
  usuario: Usuario;

  @ManyToOne(() => Categoria, (categoria) => categoria.produto)
  categoria: Categoria;

}