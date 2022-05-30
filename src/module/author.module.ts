import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {AuthorRepository} from "../repository/author.repository";
import {BookRepository} from "../repository/book.repository";
import {ReviewRepository} from "../repository/review.repository";
import {UserRepository} from "../repository/user.repository";
import {AuthorController} from "../controller/author.controller";
import {AuthorService} from "../service/author.service";

@Module({
	imports: [TypeOrmModule.forFeature([AuthorRepository, BookRepository, ReviewRepository, UserRepository])],
	controllers: [AuthorController],
	providers: [AuthorService],
	exports: [AuthorService],
})
export class AuthorModule {}
