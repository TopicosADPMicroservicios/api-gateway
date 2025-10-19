import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Inject,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateGestionDto } from 'src/common/dto/academic_management-ms/gestiones/create-gestion.dto';
import { ACADEMIC_MANAGEMENT_SERVICE } from 'src/config/services';

@Controller('gestion')
export class GestionesController {
  constructor(
    @Inject(ACADEMIC_MANAGEMENT_SERVICE)
    private readonly gestionesClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createGestionDto: CreateGestionDto) {
    return this.gestionesClient.send(
      { cmd: 'create_gestion' },
      createGestionDto,
    );
  }
  @Get()
  findAll() {
    return this.gestionesClient.send({ cmd: 'find_all_gestiones' }, {});
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gestionesClient.send({ cmd: 'find_one_gestion' }, id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGestionDto: CreateGestionDto) {
    return this.gestionesClient.send(
      { cmd: 'update_gestion' },
      { id, ...updateGestionDto },
    );
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gestionesClient.send({ cmd: 'delete_gestion' }, id);
  }
}
