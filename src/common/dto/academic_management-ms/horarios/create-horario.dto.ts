import { IsString, IsNotEmpty, IsUUID } from 'class-validator';
export class CreateHorarioDto {
  @IsString()
  @IsNotEmpty()
  diaSemana: string;

  @IsString()
  @IsNotEmpty()
  horaInicio: string;

  @IsString()
  @IsNotEmpty()
  horaFin: string;

  @IsUUID()
  @IsNotEmpty()
  aulaGrupoMateriaId: string;
}
