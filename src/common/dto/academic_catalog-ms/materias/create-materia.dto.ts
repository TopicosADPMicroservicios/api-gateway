import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMateriaDto {
  @IsNotEmpty()
  @IsString()
  sigla: string;

  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsNumber()
  creditos: number;

  @IsNotEmpty()
  @IsBoolean()
  esElectiva: boolean;

  @IsNotEmpty()
  @IsString()
  nivelId: string;

  @IsNotEmpty()
  @IsString()
  planDeEstudioId: string;
}
