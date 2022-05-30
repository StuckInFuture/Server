import {Controller, Get, UseGuards, Param, Post, Request, Body} from '@nestjs/common';
import { JwtAuthGuard } from '../security/jwt.guard';
import {LibraryService} from "../service/library.service";
import {StatusWrapper} from "../dto/output/common.output";
import {AddToLibraryInput, RemoveFromLibraryInput} from "../dto/input/library-dto.input";

@Controller('/library')
export class LibraryController {
	constructor(private libraryService: LibraryService) {}

	@Get()
	@UseGuards(JwtAuthGuard)
	getLibrary(@Request() req) {
		return this.libraryService.getLibrary(req.user.id);
	}

	@Post('/add')
	@UseGuards(JwtAuthGuard)
	addToLibrary(@Request() req, @Body() body: AddToLibraryInput) {
		return this.libraryService.addToLibrary(req.user.id, body);
	}

	@Post('/remove')
	@UseGuards(JwtAuthGuard)
	async removeFromLibrary(@Body() body: RemoveFromLibraryInput): Promise<StatusWrapper> {
		await this.libraryService.removeFromLibrary(body.libraryLineId);

		return {
			status: 200
		};
	}
}
