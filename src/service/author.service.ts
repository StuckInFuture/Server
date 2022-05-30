import {Injectable} from "@nestjs/common";
import {AuthorRepository} from "../repository/author.repository";
import {Author} from "../model/author.model";
import {AddAuthorInput} from "../dto/input/author-dto.input";

@Injectable()
export class AuthorService {
	constructor(private authorRepository: AuthorRepository) {}

	getAuthor(id: number): Promise<Author> {
		return this.authorRepository.findOneOrFail({ id }, { relations: ['books'] });
	}

	async addAuthor(data: AddAuthorInput) {
		const author = new Author();

		author.description = data.description;
		author.name = data.name;
		author.photo = data.photoURL;

		await this.authorRepository.save(author);

		return author;
	}

	async removeAuthor(authorId: number) {
		const author = await this.authorRepository.findOneOrFail({ id: authorId });

		await this.authorRepository.remove(author);
	}
}
