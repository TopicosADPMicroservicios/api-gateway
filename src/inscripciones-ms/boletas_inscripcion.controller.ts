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
import { CreateBoletasInscripcionDto } from 'src/common/dto/inscripciones-ms/boletas_inscripcion/create-boletas_inscripcion';
import { UpdateBoletasInscripcionDto } from 'src/common/dto/inscripciones-ms/boletas_inscripcion/update-boletas_inscripcion';

@Controller('boletas-inscripcion')
export class BoletasInscripcionController {
  constructor(
    @Inject(INSCRIPCIONES_SERVICE)
    private readonly boletasInscripcionClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createBoletasInscripcionDto: CreateBoletasInscripcionDto) {
    return this.boletasInscripcionClient.send(
      { cmd: 'create_boleta_inscripcion' },
      createBoletasInscripcionDto,
    );
  }

  @Get()
  findAll() {
    return this.boletasInscripcionClient.send(
      { cmd: 'find_all_boletas_inscripcion' },
      {},
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boletasInscripcionClient.send(
      { cmd: 'find_one_boleta_inscripcion' },
      id,
    );
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBoletasInscripcionDto: UpdateBoletasInscripcionDto,
  ) {
    return this.boletasInscripcionClient.send(
      { cmd: 'update_boleta_inscripcion' },
      { id, ...updateBoletasInscripcionDto },
    );
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boletasInscripcionClient.send(
      { cmd: 'delete_boleta_inscripcion' },
      id,
    );
  }
}
