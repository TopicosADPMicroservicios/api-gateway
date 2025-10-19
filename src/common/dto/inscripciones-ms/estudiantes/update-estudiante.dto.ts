import { CreateEstudianteDto } from './create-estudiante.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateEstudianteDto extends PartialType(CreateEstudianteDto) {}
