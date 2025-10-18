import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePrerequisitoDto {
  @IsNotEmpty()
  @IsString()
  siglaMateria: string;

  @IsNotEmpty()
  @IsString()
  siglaPreRequisito: string;
}
