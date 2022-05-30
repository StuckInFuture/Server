import {Controller, Get, UseGuards, Param, Post, Request, Body} from '@nestjs/common';
import { JwtAuthGuard } from '../security/jwt.guard';
import {AuthorService} from "../service/author.service";
import {StatusWrapper} from "../dto/output/common.output";
import {AddAuthorInput, RemoveAuthorInput} from "../dto/input/author-dto.input";

@Controller('/author')
export class AuthorController {
	constructor(private authorService: AuthorService) {}

	@Get('/:id')
	@UseGuards(JwtAuthGuard)
	getAuthor(@Param('id') id) {
		return this.authorService.getAuthor(id);
	}

	@Post('/add')
	@UseGuards(JwtAuthGuard)
	addAuthor(@Body() body: AddAuthorInput) {
		return this.authorService.addAuthor(body);
	}

	@Post('/remove')
	@UseGuards(JwtAuthGuard)
	async removeAuthor(@Body() body: RemoveAuthorInput): Promise<StatusWrapper> {
		await this.authorService.removeAuthor(body.authorId);

		return {
			status: 200
		};
	}
}
