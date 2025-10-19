import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { INSCRIPCIONES_SERVICE } from 'src/config';
import type { LoginDto } from 'src/common/dto/inscripciones-ms/auth/login.dto';
import { CreateEstudianteDto } from 'src/common/dto/inscripciones-ms/estudiantes/create-estudiante.dto';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(INSCRIPCIONES_SERVICE)
    private readonly authClient: ClientProxy,
  ) {}

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authClient.send({ cmd: 'login' }, loginDto);
  }

  @Post('register')
  register(@Body() createEstudianteDto: CreateEstudianteDto) {
    return this.authClient.send({ cmd: 'register' }, createEstudianteDto);
  }
}
