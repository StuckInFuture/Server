import {Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Library} from "./library.model";
import {Review} from "./review.model";

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ unique: true })
	email: string;

	@Column()
	phone: string;

	@Column()
	firstName: string;

	@Column()
	lastName: string;

	@OneToMany(() => Library, library => library.user)
	library: Library[];

	@OneToMany(() => Review, review => review.user)
	reviews: Review[];
}
