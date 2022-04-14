import { ApiProperty } from '@nestjs/swagger';

export class AddVoteReqDto {
  @ApiProperty({
    description:
      'Голосование за выбранного кандидата - Request: name - имя выбранного кандидата, если кандидата нет то он добавляется с голосом = 1, если есть то счётчик голосов увеличивается',
  })
  readonly name: string;
}
