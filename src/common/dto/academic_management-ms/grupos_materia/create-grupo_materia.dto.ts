import { IsString, IsNumber, IsUUID, IsNotEmpty } from 'class-validator';

export class CreateGrupoMateriaDto {
  @IsString()
  @IsNotEmpty()
  grupo: string;

  @IsNumber()
  @IsNotEmpty()
  inscritos: number;

  @IsNumber()
  @IsNotEmpty()
  cupos: number;

  @IsUUID()
  @IsNotEmpty()
  materiaId: string;

  @IsUUID()
  @IsNotEmpty()
  docenteId: string;

  @IsUUID()
  @IsNotEmpty()
  periodoId: string;
}
