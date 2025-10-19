import { CreateBoletasInscripcionDto } from './create-boletas_inscripcion';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateBoletasInscripcionDto extends PartialType(
  CreateBoletasInscripcionDto,
) {}
