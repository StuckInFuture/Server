export type AddBookInput = {
	authorId: number;
	name: string;
	description: string;
	numPages: number;
	cover: string;
}

export type RemoveBookInput = {
	bookId: number;
}
