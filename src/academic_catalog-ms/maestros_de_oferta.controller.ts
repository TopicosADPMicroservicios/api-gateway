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
import { CreateMaestrosDeOfertaDto } from 'src/common/dto/academic_catalog-ms/maestros_de_oferta/create-maestros_de_oferta';
import { UpdateMaestrosDeOfertaDto } from 'src/common/dto/academic_catalog-ms/maestros_de_oferta/update_maestros_de_oferta';

@Controller('maestros-de-oferta')
export class MaestrosDeOfertaController {
  constructor(
    @Inject(ACADEMIC_CATALOG_SERVICE)
    private readonly maestrosDeOfertaClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createMaestrosDeOfertaDto: CreateMaestrosDeOfertaDto) {
    return this.maestrosDeOfertaClient.send(
      { cmd: 'create_maestro_de_oferta' },
      createMaestrosDeOfertaDto,
    );
  }

  @Get()
  findAll() {
    return this.maestrosDeOfertaClient.send(
      { cmd: 'find_all_maestros_de_oferta' },
      {},
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.maestrosDeOfertaClient.send(
      { cmd: 'find_one_maestro_de_oferta' },
      id,
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMaestrosDeOfertaDto: UpdateMaestrosDeOfertaDto,
  ) {
    return this.maestrosDeOfertaClient.send(
      { cmd: 'update_maestro_de_oferta' },
      { id, ...updateMaestrosDeOfertaDto },
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.maestrosDeOfertaClient.send(
      { cmd: 'delete_maestro_de_oferta' },
      id,
    );
  }
}
