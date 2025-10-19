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
import { CreateColaDto } from 'src/common/dto/inscripciones-ms/colas/create-cola.dto';
import { UpdateColaDto } from 'src/common/dto/inscripciones-ms/colas/update-cola.dto';

@Controller('colas')
export class ColasController {
  constructor(
    @Inject(INSCRIPCIONES_SERVICE)
    private readonly colasClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createColaDto: CreateColaDto) {
    return this.colasClient.send({ cmd: 'create_cola' }, createColaDto);
  }

  @Get()
  findAll() {
    return this.colasClient.send({ cmd: 'find_all_colas' }, {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.colasClient.send({ cmd: 'find_one_cola' }, id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateColaDto: UpdateColaDto) {
    return this.colasClient.send(
      { cmd: 'update_cola' },
      { id, ...updateColaDto },
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.colasClient.send({ cmd: 'delete_cola' }, id);
  }
}
