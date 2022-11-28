import { Body, Controller, Get, Post } from "@nestjs/common";
import {ProductDto} from "../common/dto/api.dto";
import { ProductService } from "./product.service";

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {
  }
  @Post()
  createProduct(@Body() product: ProductDto){
    return this.productService.createProduct(product);
  }

  @Get()
  getProduct(){
    return this.productService.getProduct();
  }
}
