export type GenerateTokenInput = {
	email: string;
	id: number;
};

export type LoginInput = {
	email: string;
	password: string;
};

export type RegisterInput = {
	email: string;
	password: string;
	phone: string;
	firstName: string;
	lastName: string;
};

export type RefreshTokensInput = {
	refreshToken: string;
};
