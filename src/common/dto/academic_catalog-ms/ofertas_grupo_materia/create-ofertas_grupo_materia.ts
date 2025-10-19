import { IsBoolean, IsNotEmpty, IsString, IsUUID } from 'class-validator';
export class CreateOfertasGrupoMateriaDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  grupoMateriaId: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  maestroDeOfertaId: string;

  @IsNotEmpty()
  @IsBoolean()
  estaInscrita?: boolean;
}
