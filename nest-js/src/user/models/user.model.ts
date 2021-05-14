import { ApiProperty } from '@nestjs/swagger';

export class UserModel {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;
}
