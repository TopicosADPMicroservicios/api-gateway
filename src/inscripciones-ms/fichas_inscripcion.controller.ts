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
import { CreateFichaInscripcionDto } from 'src/common/dto/inscripciones-ms/fichas_inscripcion/create-ficha_inscripcion.dto';
import { UpdateFichaInscripcionDto } from 'src/common/dto/inscripciones-ms/fichas_inscripcion/update-ficha_inscripcion.dto';

@Controller('fichas-inscripcion')
export class FichasInscripcionController {
  constructor(
    @Inject(INSCRIPCIONES_SERVICE)
    private readonly fichasInscripcionClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createFichaInscripcionDto: CreateFichaInscripcionDto) {
    return this.fichasInscripcionClient.send(
      { cmd: 'create_ficha_inscripcion' },
      createFichaInscripcionDto,
    );
  }

  @Get()
  findAll() {
    return this.fichasInscripcionClient.send(
      { cmd: 'find_all_fichas_inscripcion' },
      {},
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fichasInscripcionClient.send(
      { cmd: 'find_one_ficha_inscripcion' },
      id,
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFichaInscripcionDto: UpdateFichaInscripcionDto,
  ) {
    return this.fichasInscripcionClient.send(
      { cmd: 'update_ficha_inscripcion' },
      { id, ...updateFichaInscripcionDto },
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fichasInscripcionClient.send(
      { cmd: 'delete_ficha_inscripcion' },
      id,
    );
  }
}
