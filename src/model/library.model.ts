import {Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, JoinColumn} from 'typeorm';
import {Book} from "./book.model";
import {Status} from "../utils/status.utils";
import {User} from "./user.model";
import {Review} from "./review.model";

@Entity()
export class Library {
	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(() => User, user => user.library)
	user: User;

	@ManyToOne(() => Book)
	book: Book;

	@OneToOne(() => Review)
	@JoinColumn()
	review?: Review;

	@Column({ nullable: true })
	status?: Status;
}
