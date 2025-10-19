import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ACADEMIC_MANAGEMENT_SERVICE, envs } from 'src/config';
import { GestionesController } from './gestiones.controller';
import { PeriodosController } from './periodos.controller';
import { GruposMateriaController } from './grupos_materia.controller';
import { AulasController } from './aulas.controller';
import { ModulosController } from './modulos.controller';
import { AulaGrupoMateriaController } from './aula_grupo_materia.controller';
import { HorariosController } from './horarios.controller';
import { DocentesController } from './docentes.controller';
@Module({
  controllers: [
    GestionesController,
    PeriodosController,
    GruposMateriaController,
    AulasController,
    ModulosController,
    AulaGrupoMateriaController,
    HorariosController,
    DocentesController,
  ],
  imports: [
    ClientsModule.register([
      {
        name: ACADEMIC_MANAGEMENT_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.academicManagementMicroserviceHost,
          port: envs.academicManagementMicroservicePort,
        },
      },
    ]),
  ],
})
export class AcademicManagementModule {}
