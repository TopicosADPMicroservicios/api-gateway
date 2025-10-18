import { CreateCarreraDto } from './create-carrera.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateCarreraDto extends PartialType(CreateCarreraDto) {}
