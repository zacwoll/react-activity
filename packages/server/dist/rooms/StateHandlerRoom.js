"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateHandlerRoom = void 0;
const colyseus_1 = require("colyseus");
const State_1 = require("../entities/State");
class StateHandlerRoom extends colyseus_1.Room {
    constructor() {
        super(...arguments);
        this.maxClients = 1000;
    }
    onCreate(options) {
        this.setState(new State_1.State(options));
        // Here's where we would add handlers for updating state
        this.onMessage('startTalking', (client, _data) => {
            this.state.startTalking(client.sessionId);
        });
        this.onMessage('stopTalking', (client, _data) => {
            this.state.stopTalking(client.sessionId);
        });
        this.onMessage('move', (client, _data) => {
            this.state.movePlayer(client.sessionId, _data);
        });
    }
    onAuth(_client, _options, _req) {
        return true;
    }
    onJoin(client, options) {
        this.state.createPlayer(client.sessionId, options);
    }
    onLeave(client) {
        this.state.removePlayer(client.sessionId);
    }
    onDispose() {
        console.log('Dispose StateHandlerRoom');
    }
}
exports.StateHandlerRoom = StateHandlerRoom;
