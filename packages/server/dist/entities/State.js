"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = void 0;
const schema_1 = require("@colyseus/schema");
const Player_1 = require("./Player");
class State extends schema_1.Schema {
    // Init
    constructor(attributes) {
        super();
        this.players = new schema_1.MapSchema();
        this.serverAttribute = 'this attribute wont be sent to the client-side';
        this.roomName = attributes.roomName;
        this.channelId = attributes.channelId;
    }
    _getPlayer(sessionId) {
        return Array.from(this.players.values()).find((p) => p.sessionId === sessionId);
    }
    createPlayer(sessionId, playerOptions) {
        const existingPlayer = Array.from(this.players.values()).find((p) => p.sessionId === sessionId);
        if (existingPlayer == null) {
            this.players.set(playerOptions.userId, new Player_1.Player(Object.assign(Object.assign({}, playerOptions), { sessionId })));
        }
    }
    removePlayer(sessionId) {
        const player = Array.from(this.players.values()).find((p) => p.sessionId === sessionId);
        if (player != null) {
            this.players.delete(player.userId);
        }
    }
    startTalking(sessionId) {
        const player = this._getPlayer(sessionId);
        if (player != null) {
            player.talking = true;
        }
    }
    stopTalking(sessionId) {
        const player = this._getPlayer(sessionId);
        if (player != null) {
            player.talking = false;
        }
    }
}
exports.State = State;
__decorate([
    (0, schema_1.type)({ map: Player_1.Player })
], State.prototype, "players", void 0);
__decorate([
    (0, schema_1.type)('string')
], State.prototype, "roomName", void 0);
__decorate([
    (0, schema_1.type)('string')
], State.prototype, "channelId", void 0);
