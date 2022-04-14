import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiExtraModels,
  ApiOkResponse,
  ApiResponse,
  getSchemaPath,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { VoteService } from '../service/vote.service';
import { AddVoteReqDto } from '../dto/add.vote.req.dto';
import { AddVoteResDto } from '../dto/add.vote.res.dto';
import { SetResultsDto } from '../dto/set.results.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller()
export class VoteController {
  constructor(private readonly voteService: VoteService) {}

  @ApiTags('Votes API')
  @ApiOperation({ summary: 'Получить промежуточные результаты голосования.' })
  @ApiExtraModels(SetResultsDto)
  @ApiOkResponse({
    schema: {
      allOf: [{ $ref: getSchemaPath(SetResultsDto) }],
    },
  })
  @ApiResponse({ status: 200, description: 'Успешно' })
  @ApiResponse({ status: 401, description: 'Ошибка авторизации' })
  @ApiResponse({ status: 500, description: 'Ошибка сервера' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT')
  @Get('results')
  setResults(): Promise<object> {
    return this.voteService.voteResults();
  }

  @ApiTags('Votes API')
  @ApiOperation({ summary: 'Проголосовать за кандидата.' })
  @ApiExtraModels(AddVoteResDto)
  @ApiOkResponse({
    schema: {
      allOf: [{ $ref: getSchemaPath(AddVoteResDto) }],
    },
  })
  @ApiResponse({ status: 201, description: 'Успешно' })
  @ApiResponse({ status: 401, description: 'Ошибка авторизации' })
  @ApiResponse({ status: 500, description: 'Ошибка сервера' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT')
  @Post('vote')
  addVotes(@Body() vote: AddVoteReqDto): Promise<object> {
    return this.voteService.voteAdd(vote);
  }
}
