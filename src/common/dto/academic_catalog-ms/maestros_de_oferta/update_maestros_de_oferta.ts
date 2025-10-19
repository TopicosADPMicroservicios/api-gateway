import { CreateMaestrosDeOfertaDto } from './create-maestros_de_oferta';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateMaestrosDeOfertaDto extends PartialType(
  CreateMaestrosDeOfertaDto,
) {}
