import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

export class CreatePeriodoDto {
  @IsNotEmpty()
  @IsNumber()
  numero: number;
  @IsNotEmpty()
  @IsUUID()
  gestionId: string;
}
