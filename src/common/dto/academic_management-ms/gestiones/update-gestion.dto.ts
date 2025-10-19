import { CreateGestionDto } from './create-gestion.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateGestionDto extends PartialType(CreateGestionDto) {}
