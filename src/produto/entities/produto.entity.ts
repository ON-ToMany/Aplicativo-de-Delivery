import { Entity, PrimaryGeneratedColumn,Column, ManyToOne, OneToMany} from "typeorm";
import { IsNotEmpty } from "class-validator";
import { Transform } from "class-transformer";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name:"tb_produtos"})
export class Produto{

  @ApiProperty()  
  @PrimaryGeneratedColumn()
  id!:number

  
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  @ApiProperty()  
  @Transform(({ value }) => (value ? value.trim() : value))
  @Column({length:255,nullable:false})
  @IsNotEmpty()
  nome!:string

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  @ApiProperty()  
  @Transform(({ value }) => (value ? value.trim() : value))
  @Column({length:255,nullable:false})
  @IsNotEmpty()
  descricao_Alimentar!:string

  // negativo
  @ApiProperty()  
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  calorias: number;

  @ApiProperty()  
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  gordura_total: number;

  @ApiProperty()  
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  gordura_saturada: number;

  @ApiProperty()  
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  acucar: number;

  @ApiProperty()  
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  sodio: number;

  //positivo
  @ApiProperty()  
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  fibra: number;

  @ApiProperty()  
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  proteina: number;

  @ApiProperty()  
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  frutas_vegetais_percentual: number;

  // no momento do teste, quando for cadastrar um alimento, esse campo não deve ser incluido no momento do cadastro, ele é retornado automaticamente depois pela service
  // porque ele é calculado com base nos valores dos outros atributos.
  @ApiProperty()
  @Column({ type: 'varchar', length: 1}) 
  nutri_score: string;

  @ApiProperty({type: () => Categoria})  
  @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
    onDelete: 'CASCADE',
  })
  categoria: Categoria;

  @ApiProperty({ type: () => Usuario})  
  @ManyToOne(() => Usuario, (usuario) => usuario.produto, {
    onDelete: 'CASCADE',
  })
  usuario: Usuario;

}