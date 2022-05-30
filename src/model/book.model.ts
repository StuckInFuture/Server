import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Author} from "./author.model";
import {Review} from "./review.model";

@Entity()
export class Book {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	description: string;

	@Column()
	numPages: number;

	@Column({ type: 'float' })
	avgRating: number;

	@Column()
	ratedBy: number;

	@Column()
	cover: string;

	@ManyToOne(() => Author, author => author.books)
	author: Author;

	@OneToMany(() => Review, review => review.book)
	reviews: Review[];
}
