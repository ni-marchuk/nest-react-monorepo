import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './products.entity';
import { CreateProductsDto } from './products.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productsRepository: Repository<Product>,
  ) {}

  getAllUsers(): Promise<Array<Product>> {
    return this.productsRepository.find({});
  }
  async createUser(product: CreateProductsDto): Promise<Product> {
    const created = this.productsRepository.create(product);
    return this.productsRepository.save(created);
  }
}
