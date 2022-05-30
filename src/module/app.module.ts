import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth.module';
import {AuthorModule} from "./author.module";
import {BookModule} from "./book.module";
import {LibraryModule} from "./library.module";
import {ReviewModule} from "./review.module";
import {TokenModule} from "./token.module";
import {UserModule} from "./user.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      name: 'default',
      autoLoadEntities: true,
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    AuthModule,
    TokenModule,
    UserModule,
    AuthorModule,
    BookModule,
    LibraryModule,
    ReviewModule
  ],
})
export class AppModule {}
