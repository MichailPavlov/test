import { AddVoteReqDto } from '../dto/add.vote.req.dto';
import { VoteDbObject } from '../provider-dbo/vote.db.object';
export declare class VoteService {
    private voteListCache;
    constructor(voteListCache: VoteDbObject);
    voteAdd(vote: AddVoteReqDto): Promise<object>;
    voteResults(): Promise<object>;
}
