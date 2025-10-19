import { CreateAulaGrupoMateriaDto } from './create-aula_grupo_materia.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateAulaGrupoMateriaDto extends PartialType(
  CreateAulaGrupoMateriaDto,
) {}
