"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const vote_service_1 = require("./service/vote.service");
const vote_controller_1 = require("./controller/vote.controller");
const vote_db_object_1 = require("./provider-dbo/vote.db.object");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const app_controller_1 = require("./app.controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, users_module_1.UsersModule],
        controllers: [app_controller_1.AppController, vote_controller_1.VoteController],
        providers: [vote_service_1.VoteService, vote_db_object_1.VoteDbObject],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map