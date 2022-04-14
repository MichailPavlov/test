import { Injectable } from '@nestjs/common';
import { AddVoteReqDto } from '../dto/add.vote.req.dto';
import { VoteDbObject } from '../provider-dbo/vote.db.object';

@Injectable()
export class VoteService {
  constructor(private voteListCache: VoteDbObject) {}
  async voteAdd(vote: AddVoteReqDto): Promise<object> {
    return { success: this.voteListCache.supplementVoteList(vote) };
  }
  async voteResults(): Promise<object> {
    const voteList = this.voteListCache.setVoteList(),
      voteL = [];
    let pos = 1;
    try {
      for (const key in voteList) {
        voteL.push({
          name: key,
          votes: voteList[key],
        });
      }
      voteL.sort(function (a, b) {
        return b.votes - a.votes;
      });
      voteL.map((m) => (m.position = pos++));
      return { results: voteL };
    } catch (e) {
      return { results: [] };
    }
  }
}
