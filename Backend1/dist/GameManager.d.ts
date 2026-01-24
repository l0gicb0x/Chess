import type WebSocket from "ws";
export declare class Gamemanager {
    private games;
    private pendingUsers;
    private users;
    constructor();
    addUser(socket: WebSocket): void;
    removeUser(socket: WebSocket): void;
    private addHandler;
}
//# sourceMappingURL=GameManager.d.ts.map