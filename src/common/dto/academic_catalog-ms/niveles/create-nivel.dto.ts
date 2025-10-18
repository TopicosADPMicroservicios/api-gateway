import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateNivelDto {
  @IsNotEmpty()
  @IsNumber()
  semestre: number;
}
