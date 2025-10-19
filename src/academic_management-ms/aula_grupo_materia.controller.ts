import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ACADEMIC_MANAGEMENT_SERVICE } from 'src/config';
import { CreateAulaGrupoMateriaDto } from 'src/common/dto/academic_management-ms/aula_grupo_materia/create-aula_grupo_materia.dto';
import { UpdateAulaGrupoMateriaDto } from 'src/common/dto/academic_management-ms/aula_grupo_materia/update-aula_grupo_materia.dto';

@Controller('aula-grupo-materia')
export class AulaGrupoMateriaController {
  constructor(
    @Inject(ACADEMIC_MANAGEMENT_SERVICE)
    private readonly aulaGrupoMateriaClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createAulaGrupoMateriaDto: CreateAulaGrupoMateriaDto) {
    return this.aulaGrupoMateriaClient.send(
      { cmd: 'create_aula_grupo_materia' },
      createAulaGrupoMateriaDto,
    );
  }

  @Get()
  findAll() {
    return this.aulaGrupoMateriaClient.send(
      { cmd: 'find_all_aulas_grupos_materias' },
      {},
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aulaGrupoMateriaClient.send(
      { cmd: 'find_one_aula_grupo_materia' },
      id,
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAulaGrupoMateriaDto: UpdateAulaGrupoMateriaDto,
  ) {
    return this.aulaGrupoMateriaClient.send(
      { cmd: 'update_aula_grupo_materia' },
      { id, ...updateAulaGrupoMateriaDto },
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aulaGrupoMateriaClient.send(
      { cmd: 'delete_aula_grupo_materia' },
      id,
    );
  }
}
