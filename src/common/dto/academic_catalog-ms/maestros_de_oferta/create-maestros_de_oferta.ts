import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateMaestrosDeOfertaDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  periodoId: string;
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  estudianteId: string;
}
