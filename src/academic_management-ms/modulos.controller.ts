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
import { CreateModuloDto } from 'src/common/dto/academic_management-ms/modulos/create-modulo.dto';
import { UpdateModuloDto } from 'src/common/dto/academic_management-ms/modulos/update-modulo.dto';

@Controller('modulos')
export class ModulosController {
  constructor(
    @Inject(ACADEMIC_MANAGEMENT_SERVICE)
    private readonly modulosClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createModuloDto: CreateModuloDto) {
    return this.modulosClient.send({ cmd: 'create_modulo' }, createModuloDto);
  }

  @Get()
  findAll() {
    return this.modulosClient.send({ cmd: 'find_all_modulos' }, {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modulosClient.send({ cmd: 'find_one_modulo' }, id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateModuloDto: UpdateModuloDto) {
    return this.modulosClient.send(
      { cmd: 'update_modulo' },
      { id, ...updateModuloDto },
    );
  }
  @Delete(':id')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modulosClient.send({ cmd: 'delete_modulo' }, id);
  }
}
