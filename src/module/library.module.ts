import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {BookRepository} from "../repository/book.repository";
import {UserRepository} from "../repository/user.repository";
import {LibraryRepository} from "../repository/library.repository";
import {LibraryController} from "../controller/library.controller";
import {LibraryService} from "../service/library.service";
import {ReviewRepository} from "../repository/review.repository";

@Module({
	imports: [TypeOrmModule.forFeature([LibraryRepository, BookRepository, UserRepository, ReviewRepository])],
	controllers: [LibraryController],
	providers: [LibraryService],
	exports: [LibraryService],
})
export class LibraryModule {}
