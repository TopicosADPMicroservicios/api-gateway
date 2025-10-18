import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreatePlanDeEstudiosDto {
  @IsNotEmpty()
  @IsNumber()
  version: number;
  @IsNotEmpty()
  @IsString()
  carreraId: string;
}
