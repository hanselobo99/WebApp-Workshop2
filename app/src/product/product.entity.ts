import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('product')
export class ProductEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name:'product_name',unique:true})
    productName: string;

    @Column({name:'product_price'})
    productPrice: number;

}