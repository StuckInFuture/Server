import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {AuthorRepository} from "../repository/author.repository";
import {BookRepository} from "../repository/book.repository";
import {ReviewRepository} from "../repository/review.repository";
import {UserRepository} from "../repository/user.repository";
import {BookController} from "../controller/book.controller";
import {BookService} from "../service/book.service";

@Module({
	imports: [TypeOrmModule.forFeature([AuthorRepository, BookRepository, ReviewRepository, UserRepository])],
	controllers: [BookController],
	providers: [BookService],
	exports: [BookService],
})
export class BookModule {}
