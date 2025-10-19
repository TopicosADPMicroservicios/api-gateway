import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateModuloDto {
  @IsNotEmpty()
  @IsNumber()
  numero: number;
}
