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
import { CreateColaEndpointDto } from 'src/common/dto/inscripciones-ms/cola_endpoint/create-cola_endpoint.dto';
import { UpdateColaEndpointDto } from 'src/common/dto/inscripciones-ms/cola_endpoint/update-cola_endpoint.dto';

@Controller('cola-endpoint')
export class ColaEndpointController {
  constructor(
    @Inject(INSCRIPCIONES_SERVICE)
    private readonly colaEndpointClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createColaEndpointDto: CreateColaEndpointDto) {
    return this.colaEndpointClient.send(
      { cmd: 'create_cola_endpoint' },
      createColaEndpointDto,
    );
  }

  @Get()
  findAll() {
    return this.colaEndpointClient.send({ cmd: 'find_all_cola_endpoints' }, {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.colaEndpointClient.send({ cmd: 'find_one_cola_endpoint' }, id);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateColaEndpointDto: UpdateColaEndpointDto,
  ) {
    return this.colaEndpointClient.send(
      { cmd: 'update_cola_endpoint' },
      { id, ...updateColaEndpointDto },
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.colaEndpointClient.send({ cmd: 'delete_cola_endpoint' }, id);
  }
}
