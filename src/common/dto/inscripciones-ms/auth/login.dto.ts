import { Estudiante } from './entity/estudiante.entity';

export type LoginDto = Pick<Estudiante, 'email' | 'password'>;
