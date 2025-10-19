import { CreateModuloDto } from './create-modulo.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateModuloDto extends PartialType(CreateModuloDto) {}
