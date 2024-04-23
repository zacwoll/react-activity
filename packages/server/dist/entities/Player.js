"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const schema_1 = require("@colyseus/schema");
class Player extends schema_1.Schema {
    // Init
    constructor({ name, userId, avatarUri, sessionId }) {
        super();
        this.talking = false;
        this.userId = userId;
        this.avatarUri = avatarUri;
        this.name = name;
        this.sessionId = sessionId;
        this.x = Math.round(Math.random() * 500);
        this.y = Math.round(Math.random() * 500);
        this.cursorX = 0;
        this.cursorY = 0;
    }
}
exports.Player = Player;
__decorate([
    (0, schema_1.type)("string")
], Player.prototype, "sessionId", void 0);
__decorate([
    (0, schema_1.type)("string")
], Player.prototype, "userId", void 0);
__decorate([
    (0, schema_1.type)("string")
], Player.prototype, "avatarUri", void 0);
__decorate([
    (0, schema_1.type)("string")
], Player.prototype, "name", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Player.prototype, "talking", void 0);
__decorate([
    (0, schema_1.type)("number")
], Player.prototype, "x", void 0);
__decorate([
    (0, schema_1.type)("number")
], Player.prototype, "y", void 0);
__decorate([
    (0, schema_1.type)("number")
], Player.prototype, "cursorX", void 0);
__decorate([
    (0, schema_1.type)("number")
], Player.prototype, "cursorY", void 0);
