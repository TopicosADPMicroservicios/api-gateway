import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateDetalleInscripcionDto {
  @IsNotEmpty()
  @IsUUID()
  fichaInscripcionId: string;

  @IsNotEmpty()
  @IsString()
  tipo: string;
}
