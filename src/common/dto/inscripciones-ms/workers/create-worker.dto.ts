import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';
export class CreateWorkerDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsNumber()
  concurrencia: number;

  @IsNotEmpty()
  @IsUUID()
  colaId: string;
}
