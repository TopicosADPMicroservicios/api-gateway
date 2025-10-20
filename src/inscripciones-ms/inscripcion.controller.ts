import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { INSCRIPCIONES_SERVICE } from 'src/config';
import type { CreateInscripcionDto } from 'src/common/dto/inscripciones-ms/inscripcion/create-inscripcion.dto';

@Controller('inscripcion')
export class InscripcionController {
  constructor(
    @Inject(INSCRIPCIONES_SERVICE)
    private readonly inscripcionClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createInscripcionDto: CreateInscripcionDto) {
    return this.inscripcionClient.send(
      { cmd: 'create_inscripcion' },
      createInscripcionDto,
    );
  }
}
