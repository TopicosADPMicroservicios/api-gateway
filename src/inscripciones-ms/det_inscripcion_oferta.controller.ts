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
import { CreateDetInscripcionOfertaDto } from 'src/common/dto/inscripciones-ms/det_inscripcion_oferta/create-det_inscripcion_oferta.dto';
import { UpdateDetInscripcionOfertaDto } from 'src/common/dto/inscripciones-ms/det_inscripcion_oferta/update-det_inscripcion_oferta.dto';

@Controller('det-inscripcion-oferta')
export class DetInscripcionOfertaController {
  constructor(
    @Inject(INSCRIPCIONES_SERVICE)
    private readonly detInscripcionOfertaClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createDetInscripcionOfertaDto: CreateDetInscripcionOfertaDto) {
    return this.detInscripcionOfertaClient.send(
      { cmd: 'create_det_inscripcion_oferta' },
      createDetInscripcionOfertaDto,
    );
  }

  @Get()
  findAll() {
    return this.detInscripcionOfertaClient.send(
      { cmd: 'find_all_det_inscripcion_ofertas' },
      {},
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detInscripcionOfertaClient.send(
      { cmd: 'find_one_det_inscripcion_oferta' },
      id,
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDetInscripcionOfertaDto: UpdateDetInscripcionOfertaDto,
  ) {
    return this.detInscripcionOfertaClient.send(
      { cmd: 'update_det_inscripcion_oferta' },
      { id, ...updateDetInscripcionOfertaDto },
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detInscripcionOfertaClient.send(
      { cmd: 'delete_det_inscripcion_oferta' },
      id,
    );
  }
}
