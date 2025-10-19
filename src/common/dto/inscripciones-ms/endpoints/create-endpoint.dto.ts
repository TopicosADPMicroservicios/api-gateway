import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEndpointDto {
  @IsNotEmpty()
  @IsString()
  ruta: string;

  @IsNotEmpty()
  @IsString()
  metodo: string;
}
