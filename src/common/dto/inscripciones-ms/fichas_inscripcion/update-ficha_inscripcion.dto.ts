import { CreateFichaInscripcionDto } from './create-ficha_inscripcion.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateFichaInscripcionDto extends PartialType(
  CreateFichaInscripcionDto,
) {}
