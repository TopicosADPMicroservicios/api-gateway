import { CreateHorarioDto } from './create-horario.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateHorarioDto extends PartialType(CreateHorarioDto) {}
