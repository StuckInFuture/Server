import {Injectable} from "@nestjs/common";
import {BookRepository} from "../repository/book.repository";
import {Book} from "../model/book.model";
import {AddBookInput} from "../dto/input/book-dto.input";
import {AuthorRepository} from "../repository/author.repository";

@Injectable()
export class BookService {
	constructor(
		private bookRepository: BookRepository,
		private authorRepository: AuthorRepository
	) {}

	async getBook(id: number): Promise<Book> {
		return this.bookRepository.findOneOrFail({ id }, { relations: ['author', 'reviews', 'reviews.user'] });
	}

	async getBooks(): Promise<Book[]> {
		return this.bookRepository.find({ relations: ['author', 'reviews', 'reviews.user'] });
	}

	async addBook(data: AddBookInput) {
		const author = await this.authorRepository.findOneOrFail({ id: data.authorId });

		const book = new Book();

		book.avgRating = 0;
		book.ratedBy = 0;

		book.author = author;
		book.name = data.name;
		book.cover = data.cover;
		book.description = data.description;
		book.numPages = data.numPages;

		await this.bookRepository.save(book);

		return book;
	}

	async removeBook(bookId: number) {
		const book = await this.bookRepository.findOneOrFail({ id: bookId });

		await this.bookRepository.remove(book);
	}
}
