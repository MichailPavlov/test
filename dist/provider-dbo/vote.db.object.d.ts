import { AddVoteReqDto } from '../dto/add.vote.req.dto';
export declare class VoteDbObject {
    private voteList;
    setVoteList(): object;
    supplementVoteList(vote: AddVoteReqDto): boolean;
}
