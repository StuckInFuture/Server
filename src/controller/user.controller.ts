import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { JwtAuthGuard } from '../security/jwt.guard';

@Controller('/user')
export class UserController {
	constructor(private userService: UserService) {}

	@Get()
	@UseGuards(JwtAuthGuard)
	getUser(@Request() req) {
		return this.userService.getUser(req.user.id);
	}
}
