import { Module } from '@nestjs/common';
import { AcademicCatalogModule } from './academic_catalog/academic_catalog.module';

@Module({
  imports: [AcademicCatalogModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
