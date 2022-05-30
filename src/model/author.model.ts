import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Book} from "./book.model";

@Entity()
export class Author {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	photo: string;

	@Column()
	description: string;

	@Column()
	name: string;

	@OneToMany(() => Book, book => book.author)
	books: Array<Book>
}
