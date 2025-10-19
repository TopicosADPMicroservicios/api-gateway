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
import { ACADEMIC_MANAGEMENT_SERVICE } from 'src/config';
import { CreateDocenteDto } from 'src/common/dto/academic_management-ms/docente/create-docente.dto';
import { UpdateDocenteDto } from 'src/common/dto/academic_management-ms/docente/update-docente.dto';

@Controller('docentes')
export class DocentesController {
  constructor(
    @Inject(ACADEMIC_MANAGEMENT_SERVICE)
    private readonly docentesClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createDocenteDto: CreateDocenteDto) {
    return this.docentesClient.send(
      { cmd: 'create_docente' },
      createDocenteDto,
    );
  }

  @Get()
  findAll() {
    return this.docentesClient.send({ cmd: 'find_all_docentes' }, {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.docentesClient.send({ cmd: 'find_one_docente' }, id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDocenteDto: UpdateDocenteDto) {
    return this.docentesClient.send(
      { cmd: 'update_docente' },
      { id, ...updateDocenteDto },
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.docentesClient.send({ cmd: 'delete_docente' }, id);
  }
}
