import { ApiProperty } from '@nestjs/swagger';
import { UserModel } from './user.model';

export class ListUserModel {
  @ApiProperty()
  items: UserModel[];
}
