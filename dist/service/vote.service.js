"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoteService = void 0;
const common_1 = require("@nestjs/common");
const vote_db_object_1 = require("../provider-dbo/vote.db.object");
let VoteService = class VoteService {
    constructor(voteListCache) {
        this.voteListCache = voteListCache;
    }
    async voteAdd(vote) {
        return { success: this.voteListCache.supplementVoteList(vote) };
    }
    async voteResults() {
        const voteList = this.voteListCache.setVoteList(), voteL = [];
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
        }
        catch (e) {
            return { results: [] };
        }
    }
};
VoteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [vote_db_object_1.VoteDbObject])
], VoteService);
exports.VoteService = VoteService;
//# sourceMappingURL=vote.service.js.map