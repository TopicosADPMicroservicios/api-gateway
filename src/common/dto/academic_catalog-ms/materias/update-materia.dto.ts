import { CreateMateriaDto } from './create-materia.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateMateriaDto extends PartialType(CreateMateriaDto) {}
