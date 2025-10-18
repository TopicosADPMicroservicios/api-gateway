import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { ACADEMIC_CATALOG_SERVICE } from 'src/config';
import { CreateCarreraDto } from 'src/common/dto/academic_catalog-ms/carreras/create-carrera.dto';
import { UpdateCarreraDto } from 'src/common/dto/academic_catalog-ms/carreras/update-carrera.dto';

@Controller('carreras')
export class CarrerasController {
  constructor(
    @Inject(ACADEMIC_CATALOG_SERVICE)
    private readonly carrerasClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createCarreraDto: CreateCarreraDto) {
    createCarreraDto.nombre = createCarreraDto.nombre.toUpperCase();
    return this.carrerasClient.send(
      { cmd: 'create_carrera' },
      createCarreraDto,
    );
  }

  @Get()
  findAll() {
    return this.carrerasClient.send({ cmd: 'find_all_carreras' }, {});
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const carrera = await firstValueFrom(
        this.carrerasClient.send({ cmd: 'find_one_carrera' }, id),
      );
      return carrera;
    } catch (error) {
      throw new RpcException(error);
    }
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarreraDto: UpdateCarreraDto) {
    return this.carrerasClient.send(
      { cmd: 'update_carrera' },
      { id, ...updateCarreraDto },
    );
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carrerasClient.send({ cmd: 'delete_carrera' }, id);
  }
}
