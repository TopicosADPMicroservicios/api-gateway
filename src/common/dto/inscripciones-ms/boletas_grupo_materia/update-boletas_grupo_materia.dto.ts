import { CreateBoletaGrupoMateriaDto } from './create-boletas_grupo_materia.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateBoletaGrupoMateriaDto extends PartialType(
  CreateBoletaGrupoMateriaDto,
) {}
