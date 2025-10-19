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
import { CreateEstudianteDto } from 'src/common/dto/inscripciones-ms/estudiantes/create-estudiante.dto';
import { UpdateEstudianteDto } from 'src/common/dto/inscripciones-ms/estudiantes/update-estudiante.dto';

@Controller('estudiantes')
export class EstudiantesController {
  constructor(
    @Inject(INSCRIPCIONES_SERVICE)
    private readonly estudiantesClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createEstudianteDto: CreateEstudianteDto) {
    return this.estudiantesClient.send(
      { cmd: 'create_estudiante' },
      createEstudianteDto,
    );
  }

  @Get()
  findAll() {
    return this.estudiantesClient.send({ cmd: 'find_all_estudiantes' }, {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estudiantesClient.send({ cmd: 'find_one_estudiante' }, id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEstudianteDto: UpdateEstudianteDto,
  ) {
    return this.estudiantesClient.send(
      { cmd: 'update_estudiante' },
      { id, ...updateEstudianteDto },
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estudiantesClient.send({ cmd: 'delete_estudiante' }, id);
  }
}
