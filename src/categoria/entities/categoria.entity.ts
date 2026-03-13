import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "../../Produto/entities/produto.entity";
// import { Produto } from "../../produto/entities/produto.entity";

@Entity({ name: "tb_categorias" })
export class Categoria {

    @PrimaryGeneratedColumn()    
    id: number;

    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    tipo: string; 

    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    targetAudience: string; 
    
     @OneToMany(() => Produto, (produto) => produto)
    produto: Produto[];
}