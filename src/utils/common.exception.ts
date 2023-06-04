import { ApiProperty } from '@nestjs/swagger';

export class CommonException {
  @ApiProperty()
  public readonly statusCode: number;

  @ApiProperty()
  public readonly message: string;

  constructor(statusCode: number, message: string) {
    this.statusCode = statusCode;
    this.message = message;
  }
}
