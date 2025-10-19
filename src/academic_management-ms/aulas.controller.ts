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
import { CreateAulaDto } from 'src/common/dto/academic_management-ms/aulas/create-aula.dto';
import { UpdateAulaDto } from 'src/common/dto/academic_management-ms/aulas/update-aula.dto';

@Controller('aulas')
export class AulasController {
  constructor(
    @Inject(ACADEMIC_MANAGEMENT_SERVICE)
    private readonly aulasClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createAulaDto: CreateAulaDto) {
    return this.aulasClient.send({ cmd: 'create_aula' }, createAulaDto);
  }

  @Get()
  findAll() {
    return this.aulasClient.send({ cmd: 'find_all_aulas' }, {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aulasClient.send({ cmd: 'find_one_aula' }, id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAulaDto: UpdateAulaDto) {
    return this.aulasClient.send(
      { cmd: 'update_aula' },
      { id, ...updateAulaDto },
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aulasClient.send({ cmd: 'delete_aula' }, id);
  }
}
