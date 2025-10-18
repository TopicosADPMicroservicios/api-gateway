import { CreateNivelDto } from './create-nivel.dto';
import { PartialType } from '@nestjs/mapped-types';
export class UpdateNivelDto extends PartialType(CreateNivelDto) {}
