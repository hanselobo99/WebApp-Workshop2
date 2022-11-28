import { Injectable } from "@nestjs/common";
import {ProductDto} from "../common/dto/api.dto";
import { Repository } from "typeorm";
import { ProductEntity } from "./product.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { raw } from "express";

@Injectable()
export class ProductService {
  constructor(@InjectRepository(ProductEntity) private readonly product: Repository<ProductEntity>) {
  }

  async createProduct(productDto: ProductDto) {

    console.log(productDto);
    return await this.product.insert({
      productName: productDto.productName,
      productPrice: +productDto.productPrice
    }).then(r => {
      return {
        status: "success",
        message: "Product created"
      };
    }).catch(r => {
      console.log(r);
      return {
        status: "failed",
        message: "Error while creating product"
      };
    });
  }

  async getProduct() {
    return await this.product.find().then(r => {
      return {
        status: "success",
        data: r
      };
    }).catch(r => {
      return {
        status: "Failed",
        message: "Failed to return the data"
      };
    });
  }
}
