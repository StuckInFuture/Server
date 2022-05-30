import {Controller, Get, UseGuards, Param, Post, Request, Body} from '@nestjs/common';
import { JwtAuthGuard } from '../security/jwt.guard';
import {ReviewService} from "../service/review.service";
import {AddReviewInput} from "../dto/input/review-dto.input";

@Controller('/review')
export class ReviewController {
	constructor(private reviewService: ReviewService) {}

	@Post('/add')
	@UseGuards(JwtAuthGuard)
	addReview(@Request() req, @Body() body: AddReviewInput) {
		return this.reviewService.addReview(req.user.id, body);
	}
}
