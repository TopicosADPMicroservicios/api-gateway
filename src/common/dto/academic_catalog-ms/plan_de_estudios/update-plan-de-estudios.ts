import { CreatePlanDeEstudiosDto } from './create-plan-de-estudios';
import { PartialType } from '@nestjs/mapped-types';
export class UpdatePlanDeEstudiosDto extends PartialType(
  CreatePlanDeEstudiosDto,
) {}
