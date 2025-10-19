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
import { CreateDetalleInscripcionDto } from 'src/common/dto/inscripciones-ms/detalle_inscripcion/create-detalle_inscripcion.dto';
import { UpdateDetalleInscripcionDto } from 'src/common/dto/inscripciones-ms/detalle_inscripcion/update-detalle_inscripcion.dto';

@Controller('detalle-inscripcion')
export class DetalleInscripcionController {
  constructor(
    @Inject(INSCRIPCIONES_SERVICE)
    private readonly detalleInscripcionClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createDetalleInscripcionDto: CreateDetalleInscripcionDto) {
    return this.detalleInscripcionClient.send(
      { cmd: 'create_detalle_inscripcion' },
      createDetalleInscripcionDto,
    );
  }

  @Get()
  findAll() {
    return this.detalleInscripcionClient.send(
      { cmd: 'find_all_detalles_inscripciones' },
      {},
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detalleInscripcionClient.send(
      { cmd: 'find_one_detalle_inscripcion' },
      id,
    );
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDetalleInscripcionDto: UpdateDetalleInscripcionDto,
  ) {
    return this.detalleInscripcionClient.send(
      { cmd: 'update_detalle_inscripcion' },
      { id, ...updateDetalleInscripcionDto },
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detalleInscripcionClient.send(
      { cmd: 'delete_detalle_inscripcion' },
      id,
    );
  }
}
