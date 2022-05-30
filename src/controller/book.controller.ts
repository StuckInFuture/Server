import {Controller, Get, UseGuards, Param, Post, Body} from '@nestjs/common';
import { JwtAuthGuard } from '../security/jwt.guard';
import {BookService} from "../service/book.service";
import {StatusWrapper} from "../dto/output/common.output";
import {AddBookInput, RemoveBookInput} from "../dto/input/book-dto.input";

@Controller('/book')
export class BookController {
	constructor(private bookService: BookService) {}

	@Get('/:id')
	@UseGuards(JwtAuthGuard)
	getBook(@Param('id') id) {
		return this.bookService.getBook(id);
	}

	@Get()
	@UseGuards(JwtAuthGuard)
	getBooks() {
		return this.bookService.getBooks();
	}

	@Post('/add')
	@UseGuards(JwtAuthGuard)
	addBook(@Body() body: AddBookInput) {
		return this.bookService.addBook(body);
	}

	@Post('/remove')
	@UseGuards(JwtAuthGuard)
	async removeBook(@Body() body: RemoveBookInput): Promise<StatusWrapper> {
		await this.bookService.removeBook(body.bookId)

		return {
			status: 200
		};
	}
}
