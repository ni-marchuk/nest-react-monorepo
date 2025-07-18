import { Body, Controller, Get, Post } from '@nestjs/common';
import { Product } from './products.entity';
import { ProductsService } from './products.service';
import { CreateProductsDto } from './products.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAllUsers(): Promise<Array<Product>> {
    return this.productsService.getAllUsers();
  }
  @Post()
  async createUser(@Body() product: CreateProductsDto): Promise<Product> {
    return this.productsService.createUser(product);
  }
}
