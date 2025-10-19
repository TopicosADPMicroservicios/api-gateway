import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateAvanceAcademicoDto {
  @IsNotEmpty()
  @IsUUID()
  estudianteId: string;
}
