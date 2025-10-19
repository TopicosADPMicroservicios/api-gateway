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
import { CreateWorkerDto } from 'src/common/dto/inscripciones-ms/workers/create-worker.dto';
import { UpdateWorkerDto } from 'src/common/dto/inscripciones-ms/workers/update-worker.dto';

@Controller('workers')
export class WorkersController {
  constructor(
    @Inject(INSCRIPCIONES_SERVICE)
    private readonly workersClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createWorkerDto: CreateWorkerDto) {
    return this.workersClient.send({ cmd: 'create_worker' }, createWorkerDto);
  }

  @Get()
  findAll() {
    return this.workersClient.send({ cmd: 'find_all_workers' }, {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workersClient.send({ cmd: 'find_one_worker' }, id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkerDto: UpdateWorkerDto) {
    return this.workersClient.send(
      { cmd: 'update_worker' },
      { id, ...updateWorkerDto },
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workersClient.send({ cmd: 'delete_worker' }, id);
  }
}
