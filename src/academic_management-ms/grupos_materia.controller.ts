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
import { CreateGrupoMateriaDto } from 'src/common/dto/academic_management-ms/grupos_materia/create-grupo_materia.dto';
import { UpdateGrupoMateriaDto } from 'src/common/dto/academic_management-ms/grupos_materia/update-grupo_materia.dto';

@Controller('grupos-materia')
export class GruposMateriaController {
  constructor(
    @Inject(ACADEMIC_MANAGEMENT_SERVICE)
    private readonly gruposMateriaClient: ClientProxy,
  ) {}
  @Post()
  create(@Body() createGrupoMateriaDto: CreateGrupoMateriaDto) {
    return this.gruposMateriaClient.send(
      { cmd: 'create_grupo_materia' },
      createGrupoMateriaDto,
    );
  }

  @Get()
  findAll() {
    return this.gruposMateriaClient.send(
      { cmd: 'find_all_grupos_materia' },
      {},
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gruposMateriaClient.send({ cmd: 'find_one_grupo_materia' }, id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGrupoMateriaDto: UpdateGrupoMateriaDto,
  ) {
    return this.gruposMateriaClient.send(
      { cmd: 'update_grupo_materia' },
      { id, ...updateGrupoMateriaDto },
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gruposMateriaClient.send({ cmd: 'delete_grupo_materia' }, id);
  }
}
