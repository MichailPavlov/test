import { AddVoteReqDto } from '../dto/add.vote.req.dto';
export declare class VoteListCache {
    private voteList;
    setVoteList(): object;
    supplementVoteList(vote: AddVoteReqDto): boolean;
}
