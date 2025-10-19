import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateDetInscripcionOfertaDto {
  @IsNotEmpty()
  @IsUUID()
  detalleInscripcionId: string;

  @IsNotEmpty()
  @IsUUID()
  ofertaGrupoMateriaId: string;

  @IsNotEmpty()
  @IsString()
  estado: string;
}
