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
import { CreateNivelDto } from 'src/common/dto/academic_catalog-ms/niveles/create-nivel.dto';
import { UpdateNivelDto } from 'src/common/dto/academic_catalog-ms/niveles/update-nivel.dto';

@Controller('niveles')
export class NivelesController {
  constructor(
    @Inject(ACADEMIC_CATALOG_SERVICE)
    private readonly nivelesClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createNivelDto: CreateNivelDto) {
    return this.nivelesClient.send({ cmd: 'create_nivel' }, createNivelDto);
  }

  @Get()
  findAll() {
    return this.nivelesClient.send({ cmd: 'find_all_niveles' }, {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nivelesClient.send({ cmd: 'find_one_nivel' }, id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNivelDto: UpdateNivelDto) {
    return this.nivelesClient.send(
      { cmd: 'update_nivel' },
      { id, ...updateNivelDto },
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nivelesClient.send({ cmd: 'delete_nivel' }, id);
  }
}
