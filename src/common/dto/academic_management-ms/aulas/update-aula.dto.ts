import { CreateAulaDto } from './create-aula.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateAulaDto extends PartialType(CreateAulaDto) {}
