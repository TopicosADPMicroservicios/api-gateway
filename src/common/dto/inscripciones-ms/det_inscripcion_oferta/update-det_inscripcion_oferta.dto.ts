import { CreateDetInscripcionOfertaDto } from './create-det_inscripcion_oferta.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateDetInscripcionOfertaDto extends PartialType(
  CreateDetInscripcionOfertaDto,
) {}
