import { Module } from '@nestjs/common';
import { AcademicCatalogModule } from './academic_catalog-ms/academic_catalog.module';
import { AcademicManagementModule } from './academic_management-ms/academic_management.module';
import { InscripcionesModule } from './inscripciones-ms/inscripciones.module';

@Module({
  imports: [
    AcademicCatalogModule,
    AcademicManagementModule,
    InscripcionesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
