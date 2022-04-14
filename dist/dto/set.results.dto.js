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
exports.SetResultsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class SetResultsDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Результат голосования на текущий момент со всеми кандидатами (name) и их соответствующей позицией (position) на основе кол-ва голосов (votes).',
        example: [
            {
                name: 'Михаил',
                votes: 666,
                position: 1,
            },
            {
                name: 'Павел',
                votes: 123,
                position: 2,
            },
            {
                name: 'Степан',
                votes: 64,
                position: 3,
            },
        ],
    }),
    __metadata("design:type", Array)
], SetResultsDto.prototype, "results", void 0);
exports.SetResultsDto = SetResultsDto;
//# sourceMappingURL=set.results.dto.js.map