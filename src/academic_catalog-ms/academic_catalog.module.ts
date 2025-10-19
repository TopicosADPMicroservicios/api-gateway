import { Module } from '@nestjs/common';
import { NivelesController } from './niveles.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, ACADEMIC_CATALOG_SERVICE } from 'src/config';
import { CarrerasController } from './carreras.controller';
import { PlanDeEstudiosController } from './plan_de_estudios.controller';
import { MateriasController } from './materias.controller';
import { PrerequisitosController } from './prerequisitos.controller';
import { OfertasGrupoMateriaController } from './ofertas_grupo_materia.controller';
import { MaestrosDeOfertaController } from './maestros_de_oferta.controller';

@Module({
  controllers: [
    NivelesController,
    CarrerasController,
    PlanDeEstudiosController,
    MateriasController,
    PrerequisitosController,
    MaestrosDeOfertaController,
    OfertasGrupoMateriaController,
  ],
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
