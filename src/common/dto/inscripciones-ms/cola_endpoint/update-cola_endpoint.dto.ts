import { CreateColaEndpointDto } from './create-cola_endpoint.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateColaEndpointDto extends PartialType(CreateColaEndpointDto) {}
