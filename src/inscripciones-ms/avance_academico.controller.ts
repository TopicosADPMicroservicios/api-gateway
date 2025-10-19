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
import { CreateAvanceAcademicoDto } from 'src/common/dto/inscripciones-ms/avance_academico/create-avance_academico';
import { UpdateAvanceAcademicoDto } from 'src/common/dto/inscripciones-ms/avance_academico/update-avance_academico';
@Controller('avance-academico')
export class AvanceAcademicoController {
  constructor(
    @Inject(INSCRIPCIONES_SERVICE)
    private readonly avanceAcademicoClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createAvanceAcademicoDto: CreateAvanceAcademicoDto) {
    return this.avanceAcademicoClient.send(
      { cmd: 'create_avance_academico' },
      createAvanceAcademicoDto,
    );
  }

  @Get()
  findAll() {
    return this.avanceAcademicoClient.send(
      { cmd: 'find_all_avances_academico' },
      {},
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avanceAcademicoClient.send(
      { cmd: 'find_one_avance_academico' },
      id,
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAvanceAcademicoDto: UpdateAvanceAcademicoDto,
  ) {
    return this.avanceAcademicoClient.send(
      { cmd: 'update_avance_academico' },
      { id, ...updateAvanceAcademicoDto },
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avanceAcademicoClient.send(
      { cmd: 'delete_avance_academico' },
      id,
    );
  }
}
