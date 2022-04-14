import { ApiProperty } from '@nestjs/swagger';

export class AddVoteResDto {
  @ApiProperty({
    description:
      'Голосование за выбранного кандидата - Response: true - успешно, false - произошла ошибка',
  })
  readonly success: boolean;
}
