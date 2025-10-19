import { CreatePeriodoDto } from './create-periodo.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePeriodoDto extends PartialType(CreatePeriodoDto) {}
