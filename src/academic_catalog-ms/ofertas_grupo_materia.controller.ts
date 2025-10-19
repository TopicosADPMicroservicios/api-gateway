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
import { ACADEMIC_CATALOG_SERVICE } from 'src/config';
import { CreateOfertasGrupoMateriaDto } from 'src/common/dto/academic_catalog-ms/ofertas_grupo_materia/create-ofertas_grupo_materia';
import { UpdateOfertasGrupoMateriaDto } from 'src/common/dto/academic_catalog-ms/ofertas_grupo_materia/update-ofertas_grupo_materia';
@Controller('ofertas-grupo-materia')
export class OfertasGrupoMateriaController {
  constructor(
    @Inject(ACADEMIC_CATALOG_SERVICE)
    private readonly ofertasGrupoMateriaClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createOfertasGrupoMateriaDto: CreateOfertasGrupoMateriaDto) {
    return this.ofertasGrupoMateriaClient.send(
      { cmd: 'create_oferta_grupo_materia' },
      createOfertasGrupoMateriaDto,
    );
  }

  @Get()
  findAll() {
    return this.ofertasGrupoMateriaClient.send(
      { cmd: 'find_all_ofertas_grupo_materia' },
      {},
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ofertasGrupoMateriaClient.send(
      { cmd: 'find_one_oferta_grupo_materia' },
      id,
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOfertasGrupoMateriaDto: UpdateOfertasGrupoMateriaDto,
  ) {
    return this.ofertasGrupoMateriaClient.send(
      { cmd: 'update_oferta_grupo_materia' },
      { id, ...updateOfertasGrupoMateriaDto },
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ofertasGrupoMateriaClient.send(
      { cmd: 'delete_oferta_grupo_materia' },
      id,
    );
  }
}
