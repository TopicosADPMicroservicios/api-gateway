import { CreatePrerequisitoDto } from './create-prerequisitos.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePrerequisitoDto extends PartialType(CreatePrerequisitoDto) {}
