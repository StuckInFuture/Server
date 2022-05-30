import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository';
import { User } from '../model/user.model';
import { RegisterInput } from '../dto/input/auth-dto.input';

@Injectable()
export class UserService {
	constructor(private userRepository: UserRepository) {}

	async getUser(id: number): Promise<User> {
		return this.userRepository.findOneOrFail({ id }, { relations: ['reviews', 'reviews.book' , 'library', 'library.book'] });
	}

	async createUser(data: RegisterInput): Promise<User> {
		const user = new User();

		user.email = data.email;
		user.library = [];
		user.phone = data.phone;
		user.lastName = data.lastName;
		user.firstName = data.firstName;
		user.reviews = [];

		await this.userRepository.save(user);

		return user;
	}
}
