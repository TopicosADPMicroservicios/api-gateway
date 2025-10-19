import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  ACADEMIC_CATALOG_MICROSERVICE_HOST: string;
  ACADEMIC_CATALOG_MICROSERVICE_PORT: number;
  ACADEMIC_MANAGEMENT_MICROSERVICE_HOST: string;
  ACADEMIC_MANAGEMENT_MICROSERVICE_PORT: number;
  INSCRIPCIONES_MICROSERVICE_HOST: string;
  INSCRIPCIONES_MICROSERVICE_PORT: number;
}

const envSchema = joi
  .object({
    PORT: joi.number().required(),
    ACADEMIC_CATALOG_MICROSERVICE_HOST: joi.string().required(),
    ACADEMIC_CATALOG_MICROSERVICE_PORT: joi.number().required(),
    ACADEMIC_MANAGEMENT_MICROSERVICE_HOST: joi.string().required(),
    ACADEMIC_MANAGEMENT_MICROSERVICE_PORT: joi.number().required(),
    INSCRIPCIONES_MICROSERVICE_HOST: joi.string().required(),
    INSCRIPCIONES_MICROSERVICE_PORT: joi.number().required(),
  })
  .unknown(true);

const { error, value } = envSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
  academicCatalogMicroserviceHost: envVars.ACADEMIC_CATALOG_MICROSERVICE_HOST,
  academicCatalogMicroservicePort: envVars.ACADEMIC_CATALOG_MICROSERVICE_PORT,
  academicManagementMicroserviceHost:
    envVars.ACADEMIC_MANAGEMENT_MICROSERVICE_HOST,
  academicManagementMicroservicePort:
    envVars.ACADEMIC_MANAGEMENT_MICROSERVICE_PORT,
  inscripcionesMicroserviceHost: envVars.INSCRIPCIONES_MICROSERVICE_HOST,
  inscripcionesMicroservicePort: envVars.INSCRIPCIONES_MICROSERVICE_PORT,
};
