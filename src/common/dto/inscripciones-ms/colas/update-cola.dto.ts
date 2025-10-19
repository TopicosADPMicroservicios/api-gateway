import { CreateColaDto } from './create-cola.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateColaDto extends PartialType(CreateColaDto) {}
