import { IsString, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsBoolean()
  @Type(() => Boolean)
  isActive: boolean;
}
