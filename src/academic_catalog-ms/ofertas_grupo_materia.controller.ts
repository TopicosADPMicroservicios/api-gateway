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
import type { GetOfertasGrupoMateriaDto } from 'src/common/dto/academic_catalog-ms/ofertas_grupo_materia/get-ofertas_grupo_materia.dto';
import { firstValueFrom } from 'rxjs';

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

  //PARA EL SERVICIO DE INSCRIPCIONES
  @Get('maestro/:maestroDeOfertaId')
  findByMaestro(@Param('maestroDeOfertaId') maestroDeOfertaId: string) {
    return this.ofertasGrupoMateriaClient.send(
      { cmd: 'find_all_by_maestro_id' },
      maestroDeOfertaId,
    );
  }

  @Get('')
  findAll(@Body() getOfertasGrupoMateriaDto: GetOfertasGrupoMateriaDto) {
    return firstValueFrom(
      this.ofertasGrupoMateriaClient.send(
        { cmd: 'find_all_ofertas_grupo_materia' },
        getOfertasGrupoMateriaDto.ofertaId,
      ),
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ofertasGrupoMateriaClient.send(
      { cmd: 'find_one_oferta_grupo_materia' },
      id,
    );
  }

  //PARA MARCAR COMO INSCRITAS
  @Patch('marcar-inscritas')
  marcarInscritas(@Body() ofertaId: string[]) {
    return this.ofertasGrupoMateriaClient.send(
      { cmd: 'marcar_inscritas' },
      ofertaId,
    );
  }
}
