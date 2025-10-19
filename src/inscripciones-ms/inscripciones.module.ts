import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, INSCRIPCIONES_SERVICE } from 'src/config';
import { EstudiantesController } from './estudiantes.controller';
import { AvanceAcademicoController } from './avance_academico.controller';
import { BoletasInscripcionController } from './boletas_inscripcion.controller';
import { FichasInscripcionController } from './fichas_inscripcion.controller';
import { DetalleInscripcionController } from './detalle_inscripcion.controller';
import { DetInscripcionOfertaController } from './det_inscripcion_oferta.controller';
import { BoletaGrupoMateriaController } from './boleta_grupo_materia.controller';
import { ColasController } from './colas.controller';
import { WorkersController } from './workers.controller';
import { EndpointsController } from './endpoints.controller';
import { ColaEndpointController } from './cola_endpoint.controller';
import { AuthController } from './auth.controller';

@Module({
  controllers: [
    EstudiantesController,
    AvanceAcademicoController,
    BoletasInscripcionController,
    FichasInscripcionController,
    DetalleInscripcionController,
    DetInscripcionOfertaController,
    BoletaGrupoMateriaController,
    ColasController,
    WorkersController,
    EndpointsController,
    ColaEndpointController,
    AuthController,
  ],
  imports: [
    ClientsModule.register([
      {
        name: INSCRIPCIONES_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.inscripcionesMicroserviceHost,
          port: envs.inscripcionesMicroservicePort,
        },
      },
    ]),
  ],
})
export class InscripcionesModule {}
