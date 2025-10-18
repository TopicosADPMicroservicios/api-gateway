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
import { CreateMateriaDto } from 'src/common/dto/academic_catalog-ms/materias/create-materia.dto';
import { UpdateMateriaDto } from 'src/common/dto/academic_catalog-ms/materias/update-materia.dto';

@Controller('materias')
export class MateriasController {
  constructor(
    @Inject(ACADEMIC_CATALOG_SERVICE)
    private readonly materiasClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createMateriaDto: CreateMateriaDto) {
    return this.materiasClient.send(
      { cmd: 'create_materia' },
      createMateriaDto,
    );
  }

  @Get()
  findAll() {
    return this.materiasClient.send({ cmd: 'find_all_materias' }, {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.materiasClient.send({ cmd: 'find_one_materia' }, id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMateriaDto: UpdateMateriaDto) {
    return this.materiasClient.send(
      { cmd: 'update_materia' },
      { id, ...updateMateriaDto },
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.materiasClient.send({ cmd: 'delete_materia' }, id);
  }
}
