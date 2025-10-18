import { Module } from '@nestjs/common';
import { NivelesController } from './niveles.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, ACADEMIC_CATALOG_SERVICE } from 'src/config';
import { CarrerasController } from './carreras.controller';
import { PlanDeEstudiosController } from './plan_de_estudios.controller';
import { MateriasController } from './materias.controller';
import { PrerequisitosController } from './prerequisitos.controller';

@Module({
  controllers: [
    NivelesController,
    CarrerasController,
    PlanDeEstudiosController,
    MateriasController,
    PrerequisitosController,
  ],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: ACADEMIC_CATALOG_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.academicCatalogMicroserviceHost,
          port: envs.academicCatalogMicroservicePort,
        },
      },
    ]),
  ],
})
export class AcademicCatalogModule {}
