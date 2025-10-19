import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
} from 'class-validator';

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
  @IsUUID()
  nivelId: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  planDeEstudioId: string;
}
