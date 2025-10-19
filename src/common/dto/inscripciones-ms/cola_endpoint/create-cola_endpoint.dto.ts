import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

export class CreateColaEndpointDto {
  @IsNotEmpty()
  @IsUUID()
  colaId: string;

  @IsNotEmpty()
  @IsUUID()
  endpointId: string;

  @IsNotEmpty()
  @IsNumber()
  prioridad: number;
}
