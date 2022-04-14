import { VoteService } from '../service/vote.service';
import { AddVoteReqDto } from '../dto/add.vote.req.dto';
export declare class VoteController {
    private readonly voteService;
    constructor(voteService: VoteService);
    setResults(): Promise<object>;
    addVotes(vote: AddVoteReqDto): Promise<object>;
}
