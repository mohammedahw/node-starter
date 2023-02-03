export class BadRequestException {
  message: string | undefined = "Bad Request";
  status: number = 400;
  constructor(message: string) {
    this.message = message;
  }
}

export class NotFoundException {
  message: string | undefined = "Not Found";
  status: number = 404;
  constructor(message: string) {
    this.message = message;
  }
}

export class UnauthorizedException {
  message: string | undefined = "Unauthorized";
  status: number = 401;
  constructor(message: string) {
    this.message = message;
  }
}

export class ForbiddenException {
  message: string | undefined = "Forbidden";
  status: number = 403;
  constructor(message: string) {
    this.message = message;
  }
}

export class InternalServerErrorException {
  message: string | undefined = "Internal Server Error";
  status: number = 500;
  constructor(message: string) {
    this.message = message;
  }
}
