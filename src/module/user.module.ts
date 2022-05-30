import { Module } from '@nestjs/common';
import { UserController } from '../controller/user.controller';
import { UserService } from '../service/user.service';
import { UserRepository } from '../repository/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import {LibraryRepository} from "../repository/library.repository";
import {BookRepository} from "../repository/book.repository";
import {AuthorRepository} from "../repository/author.repository";
import {ReviewRepository} from "../repository/review.repository";

@Module({
	imports: [
		TypeOrmModule.forFeature([
			UserRepository,
			LibraryRepository,
			BookRepository,
			AuthorRepository,
			ReviewRepository
		]),
	],
	controllers: [UserController],
	providers: [UserService],
	exports: [UserService],
})
export class UserModule {}
