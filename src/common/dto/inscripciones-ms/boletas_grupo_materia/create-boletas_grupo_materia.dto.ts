import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

export class CreateBoletaGrupoMateriaDto {
  @IsNotEmpty()
  @IsUUID()
  boletaInscripcionId: string;

  @IsNotEmpty()
  @IsUUID()
  grupoMateriaId: string;

  @IsNotEmpty()
  @IsNumber()
  nota: number;
}
