import { CreateGrupoMateriaDto } from './create-grupo_materia.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateGrupoMateriaDto extends PartialType(CreateGrupoMateriaDto) {}
