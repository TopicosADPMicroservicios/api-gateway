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
import { ACADEMIC_MANAGEMENT_SERVICE } from 'src/config/services';
import { CreatePeriodoDto } from 'src/common/dto/academic_management-ms/periodos/create-periodo.dto';
import { UpdatePeriodoDto } from 'src/common/dto/academic_management-ms/periodos/update-periodo.dto';

@Controller('periodos')
export class PeriodosController {
  constructor(
    @Inject(ACADEMIC_MANAGEMENT_SERVICE)
    private readonly periodosClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createPeriodoDto: CreatePeriodoDto) {
    return this.periodosClient.send(
      { cmd: 'create_periodo' },
      createPeriodoDto,
    );
  }

  @Get()
  findAll() {
    return this.periodosClient.send({ cmd: 'find_all_periodos' }, {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.periodosClient.send({ cmd: 'find_one_periodo' }, id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePeriodoDto: UpdatePeriodoDto) {
    return this.periodosClient.send(
      { cmd: 'update_periodo' },
      { id, ...updatePeriodoDto },
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.periodosClient.send({ cmd: 'delete_periodo' }, id);
  }
}
