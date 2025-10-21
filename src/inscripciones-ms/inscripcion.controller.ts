import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { INSCRIPCIONES_SERVICE } from 'src/config';
import type { CreateInscripcionDto } from 'src/common/dto/inscripciones-ms/inscripcion/create-inscripcion.dto';

@Controller('inscripcion')
export class InscripcionController {
  constructor(
    @Inject(INSCRIPCIONES_SERVICE)
    private readonly inscripcionClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createInscripcionDto: CreateInscripcionDto) {
    return this.inscripcionClient.send(
      { cmd: 'create_inscripcion' },
      createInscripcionDto,
    );
  }

  @Post('/async')
  createAsync(@Body() createInscripcionDto: CreateInscripcionDto) {
    return this.inscripcionClient.send(
      { cmd: 'create_inscripcion_async' },
      createInscripcionDto,
    );
  }

  @Get('stats/queues')
  getAllQueuesStats() {
    return this.inscripcionClient.send({ cmd: 'get_all_queues_stats' }, {});
  }

  @Get('stats/queue/:queueName')
  getQueueStats(@Param('queueName') queueName: string) {
    return this.inscripcionClient.send(
      { cmd: 'get_queue_stats' },
      { queueName },
    );
  }

  @Post('/pause-queue/:queueName')
  pauseQueue(@Param('queueName') queueName: string) {
    return this.inscripcionClient.send({ cmd: 'pause_queue' }, { queueName });
  }

  @Post('/resume-queue/:queueName')
  resumeQueue(@Param('queueName') queueName: string) {
    return this.inscripcionClient.send({ cmd: 'resume_queue' }, { queueName });
  }

  @Get('job-status/:jobId')
  getJobStatus(@Param('jobId') jobId: string) {
    return this.inscripcionClient.send({ cmd: 'get_job_status' }, { jobId });
  }
}
