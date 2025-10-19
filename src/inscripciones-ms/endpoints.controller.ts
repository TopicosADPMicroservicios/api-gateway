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
import { CreateEndpointDto } from 'src/common/dto/inscripciones-ms/endpoints/create-endpoint.dto';
import { UpdateEndpointDto } from 'src/common/dto/inscripciones-ms/endpoints/update-endpoint.dto';

@Controller('endpoints')
export class EndpointsController {
  constructor(
    @Inject(INSCRIPCIONES_SERVICE)
    private readonly endpointsClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createEndpointDto: CreateEndpointDto) {
    return this.endpointsClient.send(
      { cmd: 'create_endpoint' },
      createEndpointDto,
    );
  }

  @Get()
  findAll() {
    return this.endpointsClient.send({ cmd: 'find_all_endpoints' }, {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.endpointsClient.send({ cmd: 'find_one_endpoint' }, id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEndpointDto: UpdateEndpointDto,
  ) {
    return this.endpointsClient.send(
      { cmd: 'update_endpoint' },
      { id, ...updateEndpointDto },
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.endpointsClient.send({ cmd: 'delete_endpoint' }, id);
  }
}
