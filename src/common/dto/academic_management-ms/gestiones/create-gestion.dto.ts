import { IsNumber, IsNotEmpty } from 'class-validator';

export class CreateGestionDto {
  @IsNotEmpty()
  @IsNumber()
  año: number;
}
