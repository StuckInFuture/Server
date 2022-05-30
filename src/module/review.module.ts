import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {BookRepository} from "../repository/book.repository";
import {UserRepository} from "../repository/user.repository";
import {ReviewRepository} from "../repository/review.repository";
import {ReviewService} from "../service/review.service";
import {ReviewController} from "../controller/review.controller";

@Module({
	imports: [TypeOrmModule.forFeature([ReviewRepository, BookRepository, UserRepository])],
	controllers: [ReviewController],
	providers: [ReviewService],
	exports: [ReviewService],
})
export class ReviewModule {}
