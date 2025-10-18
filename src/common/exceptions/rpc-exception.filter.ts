import { Catch, ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

@Catch() // Captura TODAS las excepciones, no solo RpcException
export class RpcCustomExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    console.log('Exception caught in gateway:', exception);
    console.log('Exception type:', exception.constructor.name);

    let rpcError: any;

    // Si es una RpcException, extraemos el error
    if (exception instanceof RpcException) {
      rpcError = exception.getError();
      console.log('RPC Error extracted:', JSON.stringify(rpcError, null, 2));
    } else {
      // Si no es RpcException, usamos la excepción directamente
      rpcError = exception;
      console.log('Direct exception:', JSON.stringify(exception, null, 2));
    }

    console.log('Type of rpcError:', typeof rpcError);

    // Handle error with response property (NestJS HttpException format)
    if (
      typeof rpcError === 'object' &&
      rpcError !== null &&
      'response' in rpcError &&
      typeof (rpcError as any).response === 'object' &&
      'statusCode' in (rpcError as any).response
    ) {
      const responseError = (rpcError as any).response;
      const statusCode = parseInt(responseError.statusCode) || 500;
      return response.status(statusCode).json({
        statusCode,
        message: responseError.message || 'Internal server error',
        error: responseError.error || this.getErrorNameFromStatus(statusCode),
      });
    }

    // Handle direct statusCode format from RpcException
    if (
      typeof rpcError === 'object' &&
      rpcError !== null &&
      'statusCode' in rpcError &&
      'message' in rpcError
    ) {
      const statusCode = parseInt((rpcError as any).statusCode) || 500;
      return response.status(statusCode).json({
        statusCode,
        message: (rpcError as any).message || 'Internal server error',
        error:
          (rpcError as any).error || this.getErrorNameFromStatus(statusCode),
      });
    }

    // Handle nested error structure from microservice
    if (
      typeof rpcError === 'object' &&
      rpcError !== null &&
      'error' in rpcError &&
      typeof (rpcError as any).error === 'object' &&
      'statusCode' in (rpcError as any).error
    ) {
      const nestedError = (rpcError as any).error;
      const statusCode = parseInt(nestedError.statusCode) || 500;
      return response.status(statusCode).json({
        statusCode,
        message:
          nestedError.message ||
          (rpcError as any).message ||
          'Internal server error',
        error: nestedError.error || this.getErrorNameFromStatus(statusCode),
      });
    }

    // Handle legacy status field
    if (
      typeof rpcError === 'object' &&
      rpcError !== null &&
      'status' in rpcError &&
      'message' in rpcError
    ) {
      const { status, message } = rpcError as any;
      const statusCode = parseInt(status) || 500;
      return response.status(statusCode).json({
        statusCode,
        message,
        error:
          (rpcError as any).error || this.getErrorNameFromStatus(statusCode),
      });
    }

    // Handle string errors that might contain exception names
    if (typeof rpcError === 'string') {
      const statusCode = this.getStatusFromErrorString(rpcError);
      return response.status(statusCode).json({
        statusCode,
        message: rpcError,
        error: this.getErrorNameFromStatus(statusCode),
      });
    }

    // Default case
    console.log('Falling back to default error handling');
    response.status(500).json({
      statusCode: 500,
      message: (rpcError as any)?.message || 'Internal server error',
      error: 'Internal Server Error',
    });
  }

  private getStatusFromErrorString(errorString: string): number {
    if (
      errorString.includes('NotFoundException') ||
      errorString.includes('no encontrado')
    ) {
      return 404;
    }
    if (errorString.includes('BadRequestException')) {
      return 400;
    }
    if (errorString.includes('UnauthorizedException')) {
      return 401;
    }
    if (errorString.includes('ForbiddenException')) {
      return 403;
    }
    return 400;
  }

  private getErrorNameFromStatus(statusCode: number): string {
    switch (statusCode) {
      case 400:
        return 'Bad Request';
      case 401:
        return 'Unauthorized';
      case 403:
        return 'Forbidden';
      case 404:
        return 'Not Found';
      case 409:
        return 'Conflict';
      case 422:
        return 'Unprocessable Entity';
      default:
        return statusCode >= 500 ? 'Internal Server Error' : 'Client Error';
    }
  }
}
