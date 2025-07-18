import { IsString, IsBoolean, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductsDto {
  @IsString()
  title: string;

  @IsNumber()
  @Type(() => Number)
  price: number;

  @IsBoolean()
  @Type(() => Boolean)
  inStock: boolean;

  @IsString()
  category: 'books' | 'tech';
}
