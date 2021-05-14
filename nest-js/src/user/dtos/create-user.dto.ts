import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'email', required: true })
  @IsNotEmpty({
    message: 'email should not empty',
  })
  email: string;

  @ApiProperty({ description: 'password', required: true })
  @IsNotEmpty({
    message: 'password should not empty',
  })
  password: string;
}
