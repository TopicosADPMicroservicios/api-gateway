import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateFichaInscripcionDto {
  @IsNotEmpty()
  @IsUUID()
  estudianteId: string;
}
