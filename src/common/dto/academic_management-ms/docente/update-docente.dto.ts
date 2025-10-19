import { CreateDocenteDto } from './create-docente.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateDocenteDto extends PartialType(CreateDocenteDto) {}
