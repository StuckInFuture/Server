import {Injectable} from "@nestjs/common";
import {LibraryRepository} from "../repository/library.repository";
import {Library} from "../model/library.model";
import {AddToLibraryInput} from "../dto/input/library-dto.input";
import {BookRepository} from "../repository/book.repository";
import {UserRepository} from "../repository/user.repository";
import {ReviewRepository} from "../repository/review.repository";

@Injectable()
export class LibraryService {
	constructor(
		private libraryRepository: LibraryRepository,
		private bookRepository: BookRepository,
		private userRepository: UserRepository,
		private reviewRepository: ReviewRepository
	) {}

	getLibrary(id: number): Promise<Library[]> {
		return this.libraryRepository.find({ where: [{ user: { id }}], relations: ['user', 'book'] });
	}

	async addToLibrary(userId: number, data: AddToLibraryInput) {
		const user = await this.userRepository.findOneOrFail({ id: userId });
		const book = await this.bookRepository.findOneOrFail({ id: data.bookId });

		const libraryLine = new Library();

		libraryLine.book = book;
		libraryLine.user = user;

		libraryLine.status = data.status;

		if(data.reviewId) {
			libraryLine.review = await this.reviewRepository.findOneOrFail({id: data.reviewId});
		}

		const possibleLatestLibraryLine = await this.libraryRepository.find({ where: [{ user: { id: userId }, book: { id: data.bookId } }] });

		if(possibleLatestLibraryLine) {
			await this.libraryRepository.remove(possibleLatestLibraryLine);
		}

		await this.libraryRepository.save(libraryLine);

		return libraryLine;
	}

	async removeFromLibrary(libraryLineId: number) {
		const libraryLine = await this.libraryRepository.findOneOrFail({ id: libraryLineId });

		await this.libraryRepository.remove(libraryLine);
	}
}
