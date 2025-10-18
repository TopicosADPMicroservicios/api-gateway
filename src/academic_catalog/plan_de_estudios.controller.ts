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
import { CreatePlanDeEstudiosDto } from 'src/common/dto/academic_catalog-ms/plan_de_estudios/create-plan-de-estudios';
import { UpdatePlanDeEstudiosDto } from 'src/common/dto/academic_catalog-ms/plan_de_estudios/update-plan-de-estudios';

@Controller('plan-de-estudios')
export class PlanDeEstudiosController {
  constructor(
    @Inject(ACADEMIC_CATALOG_SERVICE)
    private readonly planDeEstudiosClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createPlanDeEstudiosDto: CreatePlanDeEstudiosDto) {
    return this.planDeEstudiosClient.send(
      { cmd: 'create_plan_de_estudios' },
      createPlanDeEstudiosDto,
    );
  }

  @Get()
  findAll() {
    try {
      return this.planDeEstudiosClient.send(
        { cmd: 'find_all_plan_de_estudios' },
        {},
      );
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const planDeEstudios = await firstValueFrom(
        this.planDeEstudiosClient.send(
          { cmd: 'find_one_plan_de_estudios' },
          id,
        ),
      );
      return planDeEstudios;
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePlanDeEstudiosDto: UpdatePlanDeEstudiosDto,
  ) {
    return this.planDeEstudiosClient.send(
      { cmd: 'update_plan_de_estudios' },
      { id, ...updatePlanDeEstudiosDto },
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.planDeEstudiosClient.send(
      { cmd: 'delete_plan_de_estudios' },
      id,
    );
  }
}
