import { CreateAvanceAcademicoDto } from './create-avance_academico';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateAvanceAcademicoDto extends PartialType(
  CreateAvanceAcademicoDto,
) {}
