import { IsNotEmpty, IsString } from 'class-validator';

export class CreateColaDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  descripcion?: string;
}
