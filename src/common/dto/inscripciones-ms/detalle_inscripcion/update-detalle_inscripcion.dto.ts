import { CreateDetalleInscripcionDto } from './create-detalle_inscripcion.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateDetalleInscripcionDto extends PartialType(
  CreateDetalleInscripcionDto,
) {}
