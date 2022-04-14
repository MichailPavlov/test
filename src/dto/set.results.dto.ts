import { ApiProperty } from '@nestjs/swagger';

export class SetResultsDto {
  @ApiProperty({
    description:
      'Результат голосования на текущий момент со всеми кандидатами (name) и их соответствующей позицией (position) на основе кол-ва голосов (votes).',
    example: [
      {
        name: 'Михаил',
        votes: 666,
        position: 1,
      },
      {
        name: 'Павел',
        votes: 123,
        position: 2,
      },
      {
        name: 'Степан',
        votes: 64,
        position: 3,
      },
    ],
  })
  readonly results: object[];
}
