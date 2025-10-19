import { CreateOfertasGrupoMateriaDto } from './create-ofertas_grupo_materia';
import { PartialType } from '@nestjs/mapped-types';
export class UpdateOfertasGrupoMateriaDto extends PartialType(
  CreateOfertasGrupoMateriaDto,
) {}
