import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => ({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE,
        entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
          __dirname + '/../**/**/*.entity{.ts,.js}',
          __dirname + '/../**/**/**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
