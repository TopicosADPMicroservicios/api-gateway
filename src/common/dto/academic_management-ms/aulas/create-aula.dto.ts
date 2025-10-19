import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

export class CreateAulaDto {
  @IsNotEmpty()
  @IsNumber()
  numero: number;
  @IsNotEmpty()
  @IsNumber()
  capacidad: number;
  @IsNotEmpty()
  @IsUUID()
  moduloId: string;
}
