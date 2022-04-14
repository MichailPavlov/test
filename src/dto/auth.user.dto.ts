import { ApiProperty } from '@nestjs/swagger';

export class AuthUserDto {
  @ApiProperty({
    description: 'Авторизация пользователя логин',
  })
  readonly username: string;

  @ApiProperty({
    description: 'Авторизация пользователя пароль',
  })
  readonly password: string;
}
