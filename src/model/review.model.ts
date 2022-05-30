import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {User} from "./user.model";
import {Book} from "./book.model";

@Entity()
export class Review {
	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(() => User)
	user: User;

	@ManyToOne(() => Book)
	book: Book;

	@Column()
	comment: string;

	@Column()
	rating: number;

}
