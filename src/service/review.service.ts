import {Injectable} from "@nestjs/common";
import {ReviewRepository} from "../repository/review.repository";
import {UserRepository} from "../repository/user.repository";
import {BookRepository} from "../repository/book.repository";
import {Review} from "../model/review.model";
import {AddReviewInput} from "../dto/input/review-dto.input";

@Injectable()
export class ReviewService {
	constructor(
		private reviewRepository: ReviewRepository,
		private userRepository: UserRepository,
		private bookRepository: BookRepository
	) {}

	async addReview(userId: number, data: AddReviewInput): Promise<Review> {
		const book = await this.bookRepository.findOneOrFail({ id: data.bookId });
		const user = await this.userRepository.findOneOrFail({ id: userId }, { relations: ['reviews'] });

		const review = new Review();

		review.rating = data.rating;
		review.book = book;
		review.comment = data.comment;
		review.user = user;

		await this.reviewRepository.save(review);

		book.avgRating = (book.avgRating * book.ratedBy + review.rating) / (book.ratedBy + 1);
		book.ratedBy += 1;

		await this.bookRepository.save(book);

		return review;
	}
}
