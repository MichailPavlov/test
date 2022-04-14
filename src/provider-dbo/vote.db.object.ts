import { Injectable } from '@nestjs/common';
import { AddVoteReqDto } from '../dto/add.vote.req.dto';

@Injectable()
export class VoteDbObject {
  private voteList = {};
  setVoteList(): object {
    return this.voteList;
  }
  supplementVoteList(vote: AddVoteReqDto): boolean {
    try {
      vote.name in this.voteList
        ? this.voteList[vote.name]++
        : (this.voteList[vote.name] = 1);
      return true;
    } catch (e) {
      return false;
    }
  }
}
