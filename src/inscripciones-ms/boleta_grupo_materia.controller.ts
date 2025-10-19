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
import { INSCRIPCIONES_SERVICE } from 'src/config';
import { CreateBoletaGrupoMateriaDto } from 'src/common/dto/inscripciones-ms/boletas_grupo_materia/create-boletas_grupo_materia.dto';
import { UpdateBoletaGrupoMateriaDto } from 'src/common/dto/inscripciones-ms/boletas_grupo_materia/update-boletas_grupo_materia.dto';

@Controller('boleta-grupo-materia')
export class BoletaGrupoMateriaController {
  constructor(
    @Inject(INSCRIPCIONES_SERVICE)
    private readonly boletaGrupoMateriaClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createBoletaGrupoMateriaDto: CreateBoletaGrupoMateriaDto) {
    return this.boletaGrupoMateriaClient.send(
      { cmd: 'create_boleta_grupo_materia' },
      createBoletaGrupoMateriaDto,
    );
  }

  @Get()
  findAll() {
    return this.boletaGrupoMateriaClient.send(
      { cmd: 'find_all_boletas_grupo_materia' },
      {},
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boletaGrupoMateriaClient.send(
      { cmd: 'find_one_boleta_grupo_materia' },
      id,
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBoletaGrupoMateriaDto: UpdateBoletaGrupoMateriaDto,
  ) {
    return this.boletaGrupoMateriaClient.send(
      { cmd: 'update_boleta_grupo_materia' },
      { id, ...updateBoletaGrupoMateriaDto },
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boletaGrupoMateriaClient.send(
      { cmd: 'delete_boleta_grupo_materia' },
      id,
    );
  }
}
