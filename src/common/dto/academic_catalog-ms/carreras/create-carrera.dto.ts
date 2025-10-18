import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateCarreraDto {
  @IsNotEmpty()
  @IsNumber()
  codigo: number;

  @IsNotEmpty()
  @IsString()
  nombre: string;
}
