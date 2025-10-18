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
import { CreatePrerequisitoDto } from 'src/common/dto/academic_catalog-ms/prerequisitos/create-prerequisitos.dto';
import { UpdatePrerequisitoDto } from 'src/common/dto/academic_catalog-ms/prerequisitos/update-prerequisito.dto';

@Controller('prerequisitos')
export class PrerequisitosController {
  constructor(
    @Inject(ACADEMIC_CATALOG_SERVICE)
    private readonly prerequisitosClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createPrerequisitoDto: CreatePrerequisitoDto) {
    return this.prerequisitosClient.send(
      { cmd: 'create_prerequisito' },
      createPrerequisitoDto,
    );
  }

  @Get()
  findAll() {
    return this.prerequisitosClient.send({ cmd: 'find_all_prerequisitos' }, {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prerequisitosClient.send(
      { cmd: 'find_one_prerequisito' },
      { id },
    );
  }
  @Patch(':id')
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePrerequisitoDto: UpdatePrerequisitoDto,
  ) {
    return this.prerequisitosClient.send(
      { cmd: 'update_prerequisito' },
      { id, ...updatePrerequisitoDto },
    );
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prerequisitosClient.send(
      { cmd: 'delete_prerequisito' },
      { id },
    );
  }
}
