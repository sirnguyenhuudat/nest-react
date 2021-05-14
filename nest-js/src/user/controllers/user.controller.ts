import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { UserService } from '../servies';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ListUserModel } from '../models/list-user.model';
import { CreateUserDto } from '../dtos/create-user.dto';
import { Request } from 'express';

@ApiTags('User')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiResponse({
    status: 200,
    type: ListUserModel,
    description: 'list users',
  })
  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Post()
  createUser(@Req() request: Request, @Body() payload: CreateUserDto) {
    return payload;
  }
}
