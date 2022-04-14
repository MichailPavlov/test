"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoteListCache = void 0;
const common_1 = require("@nestjs/common");
let VoteListCache = class VoteListCache {
    constructor() {
        this.voteList = {};
    }
    setVoteList() {
        return this.voteList;
    }
    supplementVoteList(vote) {
        try {
            vote.name in this.voteList
                ? this.voteList[vote.name]++
                : (this.voteList[vote.name] = 1);
            return true;
        }
        catch (e) {
            return false;
        }
    }
};
VoteListCache = __decorate([
    (0, common_1.Injectable)()
], VoteListCache);
exports.VoteListCache = VoteListCache;
//# sourceMappingURL=vote.list.cache.js.map