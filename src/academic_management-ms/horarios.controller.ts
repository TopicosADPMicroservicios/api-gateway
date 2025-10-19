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
import { CreateHorarioDto } from 'src/common/dto/academic_management-ms/horarios/create-horario.dto';
import { UpdateHorarioDto } from 'src/common/dto/academic_management-ms/horarios/update-horario.dto';

@Controller('horarios')
export class HorariosController {
  constructor(
    @Inject(ACADEMIC_MANAGEMENT_SERVICE)
    private readonly horariosClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createHorarioDto: CreateHorarioDto) {
    return this.horariosClient.send(
      { cmd: 'create_horario' },
      createHorarioDto,
    );
  }

  @Get()
  findAll() {
    return this.horariosClient.send({ cmd: 'find_all_horarios' }, {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.horariosClient.send({ cmd: 'find_one_horario' }, id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHorarioDto: UpdateHorarioDto) {
    return this.horariosClient.send(
      { cmd: 'update_horario' },
      { id, ...updateHorarioDto },
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.horariosClient.send({ cmd: 'delete_horario' }, id);
  }
}
