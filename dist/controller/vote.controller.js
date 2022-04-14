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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoteController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const vote_service_1 = require("../service/vote.service");
const add_vote_req_dto_1 = require("../dto/add.vote.req.dto");
const add_vote_res_dto_1 = require("../dto/add.vote.res.dto");
const set_results_dto_1 = require("../dto/set.results.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let VoteController = class VoteController {
    constructor(voteService) {
        this.voteService = voteService;
    }
    setResults() {
        return this.voteService.voteResults();
    }
    addVotes(vote) {
        return this.voteService.voteAdd(vote);
    }
};
__decorate([
    (0, swagger_1.ApiTags)('Votes API'),
    (0, swagger_1.ApiOperation)({ summary: 'Получить промежуточные результаты голосования.' }),
    (0, swagger_1.ApiExtraModels)(set_results_dto_1.SetResultsDto),
    (0, swagger_1.ApiOkResponse)({
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(set_results_dto_1.SetResultsDto) }],
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Успешно' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Ошибка авторизации' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Ошибка сервера' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('JWT'),
    (0, common_1.Get)('results'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VoteController.prototype, "setResults", null);
__decorate([
    (0, swagger_1.ApiTags)('Votes API'),
    (0, swagger_1.ApiOperation)({ summary: 'Проголосовать за кандидата.' }),
    (0, swagger_1.ApiExtraModels)(add_vote_res_dto_1.AddVoteResDto),
    (0, swagger_1.ApiOkResponse)({
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(add_vote_res_dto_1.AddVoteResDto) }],
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Успешно' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Ошибка авторизации' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Ошибка сервера' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('JWT'),
    (0, common_1.Post)('vote'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_vote_req_dto_1.AddVoteReqDto]),
    __metadata("design:returntype", Promise)
], VoteController.prototype, "addVotes", null);
VoteController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [vote_service_1.VoteService])
], VoteController);
exports.VoteController = VoteController;
//# sourceMappingURL=vote.controller.js.map