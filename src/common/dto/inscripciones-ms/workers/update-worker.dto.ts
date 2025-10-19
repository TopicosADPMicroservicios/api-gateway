import { CreateWorkerDto } from './create-worker.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateWorkerDto extends PartialType(CreateWorkerDto) {}
